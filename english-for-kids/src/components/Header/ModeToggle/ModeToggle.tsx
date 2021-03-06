import './ModeToggle.scss';

import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {changeModeAction} from '../../../store/baseReducer';
import {RootState} from '../../../types/types';

function ModeToggle(): JSX.Element {
  const dispatch = useDispatch();
  const currentMode: string = useSelector((state: RootState): string => state.baseReducer.mode);

  function changeAppMode(): void {
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
