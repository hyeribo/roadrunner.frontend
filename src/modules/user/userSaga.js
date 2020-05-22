import { put, take, call } from "redux-saga/effects";
import queryString from "query-string";

import {
  GET_FAN_LIST,
  USER_BLOCK,
  GET_ARTIST_DETAIL,
  GET_ARTIST_LIST,
  MODIFY_ARTIST,
  setValue,
  getFanList,
  setFanList,
  getArtistList,
  setArtistList,
  setArtistDetail,
} from "./userActions";
import reducers from "./userReducers";
import { reqeustSaga } from "../request/requestSagas";
import store from "../index";
import { dateFormat } from "../../utils/DateUtils";
import { autoHypenPhone } from "../../utils/StringUtils";

/* ==========================================
	worker
========================================== */
function* workFanList({
  page = 0,
  maxResults = 10,
  name,
  email,
  isBlockUser,
  allowEmail,
}) {
  // console.log('> work ', page)
  try {
    const search = queryString.stringify({
      name,
      email,
      isBlockUser,
      allowEmail,
    });
    const uri = `/admin/user/fan?page=${page}&maxResults=${maxResults}${
      search ? `&${search}` : ""
    }`;
    const res = yield call(reqeustSaga, {
      uri,
      auth: true,
    });
    const { list, count, pageInfo } = res.data.data;
    let convertedList = [];

    if (list && list.length) {
      convertedList = list.map((a) => ({
        ...a,
        checked: false,
        allowEmail: a.allowEmail ? "Y" : "N",
        allowPush: a.allowPush ? "Y" : "N",
        created: dateFormat(new Date(a.created), "yy-MM-dd"),
        phone: a.phone && autoHypenPhone(a.phone),
      }));
    }

    // console.log('> ', list[0].allowEmail ? 'Y' : 'N')
    yield put(
      setFanList({
        page,
        maxResults,
        list: convertedList,
        count,
        pageInfo,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

function* workArtistList({
  page = 0,
  maxResults = 10,
  name,
  email,
  authStatus,
  authKookyStatus,
  allowEmail,
}) {
  try {
    const search = queryString.stringify({
      name,
      email,
      authStatus,
      authKookyStatus,
      allowEmail,
    });
    const uri = `/admin/user/artist?page=${page}&maxResults=${maxResults}${
      search ? `&${search}` : ""
    }`;
    const res = yield call(reqeustSaga, {
      uri,
      auth: true,
    });
    const { list, count, pageInfo } = res.data.data;
    let convertedList = [];

    if (list && list.length) {
      convertedList = list.map((a) => ({
        ...a,
        checked: false,
        allowEmail: a.allowEmail ? "Y" : "N",
        allowPush: a.allowPush ? "Y" : "N",
        authStatus: a.authStatus ? "Y" : "N",
        authKookyStatus: a.authKookyStatus ? "Y" : "N",
        contents: {
          youtube: a.youtube,
          instagram: a.instagram,
        },
        created: dateFormat(new Date(a.created), "yy-MM-dd"),
        phone: a.phone && autoHypenPhone(a.phone),
      }));
    }

    // console.log('> ', list[0].allowEmail ? 'Y' : 'N')
    yield put(
      setArtistList({
        page,
        maxResults,
        list: convertedList,
        count,
        pageInfo,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

function* workUserBlock({ isBlock, id }) {
  try {
    const uri = `/admin/user/block`;
    yield call(reqeustSaga, {
      uri,
      method: "put",
      auth: true,
      data: {
        userId: id,
        block: isBlock,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

function* workGetArtistDetail({ id }) {
  try {
    const {
      data: { data },
    } = yield call(reqeustSaga, {
      uri: `/admin/user/artist/detail?artistId=${id}`,
      auth: true,
    });
    return {
      ...data.user,
      created: dateFormat(new Date(data.user.created), "yy-MM-dd"),
      phone: data.user.phone && autoHypenPhone(data.user.phone),
    };
  } catch (e) {
    console.error(e);
  }
}

function* worModifyArtist(data) {
  try {
    yield call(reqeustSaga, {
      method: "put",
      uri: `/admin/user/artist`,
      auth: true,
      data,
    });
  } catch (e) {
    console.error(e);
  }
}

/* ==========================================
	watcher
========================================== */
function* watchFanList() {
  while (true) {
    const {
      payload: { page, maxResults, name, email, isBlockUser, allowEmail },
    } = yield take(GET_FAN_LIST);
    yield call(workFanList, {
      page,
      maxResults,
      name,
      email,
      isBlockUser,
      allowEmail,
    });
  }
}

function* watchArtistList() {
  while (true) {
    const {
      payload: {
        page,
        maxResults,
        name,
        email,
        authStatus,
        authKookyStatus,
        allowEmail,
      },
    } = yield take(GET_ARTIST_LIST);
    yield call(workArtistList, {
      page,
      maxResults,
      name,
      email,
      authStatus,
      authKookyStatus,
      allowEmail,
    });
  }
}

function* watchArtistDetail() {
  while (true) {
    const {
      payload: { id },
    } = yield take(GET_ARTIST_DETAIL);
    const user = yield call(workGetArtistDetail, { id });
    yield put(setArtistDetail(user));
  }
}

function* watchModifyArtist() {
  while (true) {
    const {
      payload: { history, ...data },
    } = yield take(MODIFY_ARTIST);

    yield call(worModifyArtist, data);
    const user = yield call(workGetArtistDetail, { id: data.artistId });
    yield put(setArtistDetail(user));
    history.goBack();
  }
}

function* watchUserBlock() {
  while (true) {
    const {
      payload: { isBlock, id, afterAction },
    } = yield take(USER_BLOCK);

    yield call(workUserBlock, { isBlock, id });

    if (afterAction) {
      yield put(afterAction);
    }
  }
}

export function* initialize({ enterPage, page, maxResults, ...args }) {
  store.reducerManager.add("user", reducers);

  if (enterPage === "/user/fan") {
    yield put(
      getFanList({
        page,
        maxResults,
        name: args.name,
        email: args.email,
        isBlockUser: args.isBlockUser,
        allowEmail: args.allowEmail,
      })
    );
  } else if (enterPage === "/user/artist") {
    yield put(
      getArtistList({
        page,
        maxResults,
        name: args.name,
        email: args.email,
        authStatus: args.authStatus,
        authKookyStatus: args.authKookyStatus,
      })
    );
  }
}

/* ==========================================
	watcher 내보내기
========================================== */
export default {
  watchFanList,
  watchUserBlock,
  watchArtistList,
  watchArtistDetail,
  watchModifyArtist,
};
