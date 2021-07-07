import './ModeToggle.scss';

import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {changeModeAction} from '../../../store/baseReducer';
import {RootState} from '../../../types/types';

function ModeToggle(): JSX.Element {
  const dispatch = useDispatch();
  const currentMode = useSelector((state: RootState) => state.baseReducer.mode);

  function changeAppMode() {
    dispatch(changeModeAction());
  }

  return (
    <div className="mode-toggle">
      <label htmlFor="input-checkbox" className="toggle-switch">
        <input id="input-checkbox" type="checkbox" onClick={changeAppMode} />
        <span className={`slider ${currentMode}`} />
      </label>
    </div>
  );
}

export default ModeToggle;
