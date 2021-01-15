import React, {useRef}  from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getDeleteContactMode} from './deleteContactSlice';



export function DeleteContact(){

  const isDeleteContactMode = useSelector(getDeleteContactMode);
  console.log('DeleteContact',isDeleteContactMode);

  return isDeleteContactMode&&(
    <div>
      DeleteContact
    </div>
  )
}

