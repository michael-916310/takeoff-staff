export async function login (userName, userPsw) {
  try{
    const resp = await fetch('./data/auth-data.json');
    if (resp.ok) {
      const data = await resp.json();
      return data.userList.filter((el)=>{
        return (el.userName === userName) && (el.userPassword === userPsw)
      }).length > 0;
    }
    return false;
  } catch (e) {
    console.log('Error while loading auth-data.json:', e);
    return false;
  }
}

export async function getContactData(){
  try{
    const resp = await fetch("./data/contact-list-data.json");
    if (resp.ok) {
      const data = await resp.json();
      return data.list;
    }
    return [];

  }catch(e){
    console.log('Error while loading contact-list-data.json:', e);
    return [];
  }
}
