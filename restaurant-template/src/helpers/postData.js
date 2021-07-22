const postData = async (url, payload) => {
  const res = await fetch( url , {
    method: 'POST',
    body: payload
  })
  return res.json();
}

export default postData;