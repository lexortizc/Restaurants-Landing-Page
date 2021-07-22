const getData = async (URL) => {
  const res = await fetch(URL, {
    method:'GET',
    headers: {}
  });
  const data = await res.json();
  return data;
}

export default getData;