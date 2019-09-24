import Axios from 'axios'
import MainUrl from '../Utilities/Url'
//import { AppToaster } from '../Components/Wrappers/Toaster'
//type
export const GET_ALL_ARTICLES = "GET_ALL_ARTICLES";
export const DELETE_LINK = "DELETE_LINK";

//pure func
function _getAllArticles(payload) {
  return {
    type: GET_ALL_ARTICLES, payload
  }
}

//functions
export function getAllArticles() {
  console.log("in action")
  return (dispatch) => {
    return Axios.get(MainUrl + "GetSpecialMedia").then((res) => {
      console.log(res);
      dispatch(_getAllArticles(res.data))
    })
  }
}

// export function getLink(id) {
//   return () => {
//     return AjaxGet("GetSingleLink/" + id)
//   }
// }

// export function addLink(param) {
//   return () => {
//     return AjaxPost("AddLink", param).done((res) => {
//       if (res == true)
//         AppToaster.show({ message: "عملیات افزودن با موفقیت انجام شد", intent: "success" });
//       else
//         AppToaster.show({ message: "خطا در عملیات", intent: "error" });
//     })
//   }
// }

// export function updateLink(param) {
//   return () => {
//     return AjaxPost("EditLink", param).done((res) => {
//       if (res == true)
//         AppToaster.show({ message: "عملیات ویرایش با موفقیت انجام شد", intent: "success" });
//       else
//         AppToaster.show({ message: "خطا در عملیات", intent: "error" });
//     })
//   }
// }

// export function deleteLink(param) {
//   return (dispatch) => {
//     return AjaxPost("deletelink", param).done((res) => {
//       if (res == true)
//         AppToaster.show({ message: "عملیات حذف با موفقیت انجام شد", intent: "success" });
//       else
//         AppToaster.show({ message: "خطا در عملیات", intent: "error" });
//     })
//   }
// }
// export function uploadImage(param) {
//   return () => {
//     return $.ajax({
//       xhr: function () {
//         var xhr = new window.XMLHttpRequest();
//         //Download progress
//         xhr.upload.onprogress = function (evt) {
//           var percentComplete = evt.loaded / evt.total;
//           $(".bp3-progress-meter")[0].style.width = Math.round(percentComplete * 100) + "%";
//         }
//         return xhr;
//       },
//       url: process.env.REACT_APP_API_PATH + "UploadImage",
//       processData: false,
//       contentType: false,
//       data: param,
//       method: "Post",
//       success: () => {
//         $(".bp3-progress-bar").fadeOut();
//         setTimeout(() => {
//           AppToaster.show({ message: "تصویر موردنظر بارگذاری گردید", intent: "success" })
//         }, 1500);

//         $(".bp3-form-helper-text")[0].innerText = "";
//       }
//     });
//     // return PhotoAjaxPost("UploadImage", param).done((res) => {
//     //   console.log(res);
//     // })
//   }

// }