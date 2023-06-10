// // upload image in imgbb

// // export const imageupload = async image => {
// //     const formData = new FormData();
// //     formData.append('image', image)
// //     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
// //    const res=await  fetch(img_hosting_url, {
// //         method: 'POST',
// //         body:formData
// //     })
// //     const data = await response.json()
// //     return data
// // }

// export const imageUpload = async image => {
//     const formData = new FormData()
//     formData.append('image', image)
//     const url = `https://api.imgbb.com/1/upload?key=1b2afc4fb25c703c65b9f0e61095644f`
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//     })
//     const data = await response.json()
//     return data
//   }