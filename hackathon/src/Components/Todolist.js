import React, { useState } from 'react';
import '../Css/todos.css';
import { faTrashAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todolist = ({ todo, deleteTodo, changeStatus, editContent }) => {
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [inputs, setInputs] = useState('');

  return (
    <div className="listContainer">
      <div className="todoWrapper">
        <div className="listStyle">
          <div className="contentEditStyle">
            <span className="numbering">{todo.id}</span>
            {todo.status === 'completed' ? (
              <>
                <span className="completedStyle">{todo.content}</span>
                <FontAwesomeIcon
                  icon={faSmileBeam}
                  style={{
                    color: '#49c47a',
                    margin: '5 10px 0',
                  }}
                />
              </>
            ) : (
              <>
                <span>{todo.content}</span>
                <FontAwesomeIcon
                  icon={faSadTear}
                  style={{
                    color: '#fc9d4e',
                    margin: '5 10px 0',
                  }}
                />
              </>
            )}
          </div>
          <div className="iconStyle">
            <span className="statusChange" onClick={() => changeStatus(todo)}>
              {todo.status}
            </span>
            <FontAwesomeIcon
              icon={faTrashAlt}
              style={{
                color: '#f2665c',
                margin: '0 10px 0 0',
                cursor: 'pointer',
              }}
              onClick={() => deleteTodo(todo.id)}
            />
            {!editMode && (
              <>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ color: '#68af96', cursor: 'pointer' }}
                  onClick={() => {
                    setEditMode(true);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {editMode && (
        <div className="todoWrapper editinput">
          <input
            placeholder="수정할 내용을 입력하세요."
            className="editInput"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              console.log(e.target.value);
            }}
          />
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="editSubmit"
            onClick={() => {
              editContent(todo, content);
              setEditMode(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Todolist;
