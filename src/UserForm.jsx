import React, { Component } from "react";
import PropTypes from "prop-types";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initialName || "",
      email: props.initialEmail || "",
      errors: {},
    };
  }

  validate = () => {
    const errors = {};
    const { name, email } = this.state;

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.validate()) return;

    const { name, email } = this.state;
    this.props.onSubmit({ name: name.trim(), email: email.trim() });

    if (!this.props.isEditing) {
      this.setState({ name: "", email: "", errors: {} });
    }
  };

  render() {
    const { name, email, errors } = this.state;
    const { onCancel, submitLabel } = this.props;

    return (
      <form onSubmit={this.onSubmit} noValidate style={{ marginBottom: "1rem" }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.onChange}
            aria-label="Name"
          />
          {errors.name && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</div>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
            aria-label="Email"
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</div>
          )}
        </div>

        <div>
          <button type="submit">{submitLabel}</button>
          {onCancel && (
            <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
              Cancel
            </button>
          )}
        </div>
      </form>
    );
  }
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  initialName: PropTypes.string,
  initialEmail: PropTypes.string,
};

export default UserForm;