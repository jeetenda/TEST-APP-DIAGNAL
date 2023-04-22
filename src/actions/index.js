// will call dummy api with axiox but set data from assignment 3 data set 
import { FETCH_DATA_API } from "./types";
import axios from "axios";
import data1 from '../apis/CONTENTLISTINGPAGE-PAGE1.json'
import data2 from '../apis/CONTENTLISTINGPAGE-PAGE2.json'
import data3 from '../apis/CONTENTLISTINGPAGE-PAGE3.json'

const apiUrl = "";
export const fetchData = (data, store) => {
  // if store have image data adding next page data in array of store to update with new data
  let payload = data;
  if (store?.data) {
    console.log(data.page.contentitems.content);
    console.log(store.data.page.contentitems.content);
    payload = {
      ...store,
      data: {
        ...store.data,
        page: {
          ...store.data.page,
          contentitems: {
            ...store.data.page.contentitems,
            content: [...store.data.page.contentitems.content,
            ...data.page.contentitems.content
            ]
          }
        }
      }
    }.data;
    console.log(payload.page.contentitems.content);
  }
  return {
    type: FETCH_DATA_API,
    data: payload
  };
};

// can avoid this but not using real api 
const getpage = (page) => {
  //console.log(page)
  if (page === 1) return data1;
  if (page === 2) return data2;
  if (page === 3) return data3;
}

// calling api with page no send by app.js usedispatch call 
export const fetchDataAPI = (page) => {
  return (dispatch, getState) => {
    return axios
      .get(apiUrl)
      .then(response => {
        // const data = "data"+page;
        // console.log(window[data])
        dispatch(fetchData(getpage(page), getState()));
      })
      .catch(error => {
        throw error;
      });
  };
};
