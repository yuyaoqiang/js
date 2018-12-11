import React from "react";
import "./style.scss"
const FormCreatHoc =(WrapperComponent) => {
  return class FormCreatHoc extends React.Component {
    render() {
      const { getFieldError } = this.props.form;
      let errors;
      const props = {
        ...this.props,
      };
      return (
      <React.Fragment>
        <div className="validata_wrap">
          <p> {(errors = getFieldError('username')) ? errors.join(',') : null}</p>
          <p> {(errors = getFieldError('password')) ? errors.join(',') : null}</p>
         
        </div>
       <WrapperComponent {...props} />
      </React.Fragment>
      );
    }
  };
};
export default FormCreatHoc
