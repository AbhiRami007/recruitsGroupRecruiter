import React from "react";

function ProfileInput(props) {
  return (
    <div>
      {props.type === "select" ? (
        <div className="input-select">
          <label htmlFor={props.id} className="input-label">
            {props.label === null ? <>&nbsp;</> : props.label}
          </label>
          <select id={props.id} name={props.name}>
            {props?.options?.map((option, key) => (
              <option key={key} value={option.value}>
                {option?.title}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <>
          <label htmlFor={props.id} className="input-label">
            {props.label === null ? <>&nbsp;</> : props.label}
          </label>
          <input className="profile-input" {...props} />
        </>
      )}
    </div>
  );
}

export default ProfileInput;
