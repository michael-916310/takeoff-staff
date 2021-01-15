export async function login (userName, userPsw) {
  try{
    const resp = await fetch('../data/auth-data.json');
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
  let list = [
    {
      contactId: 1,
      contactName: 'Иванов Иван Иванович',
      contactPhone: '+7 917 999-88-77'
    },
    {
      contactId: 2,
      contactName: 'Чингачгук Петр Петрович',
      contactPhone: '+7 927 111-22-33'
    },
    {
      contactId: 3,
      contactName: 'Васильева Василиса Премудрая',
      contactPhone: '+7 927 222-22-33'
    },
    {
      contactId: 4,
      contactName: 'Царь Царевич Король Королевич',
      contactPhone: '+7 927 333-22-33'
    }
  ];

  const resp = await fetch("../data/contact-list-data.json");
  console.log(resp);

  return list;
}
