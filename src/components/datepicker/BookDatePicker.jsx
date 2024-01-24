import React from "react";


class BookDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleChange = (value) => {
    this.setState({ value });
    this.props.setFieldValue(this.props.name, value, true);
  };

  render() {
    const { name, label, disablePast } = this.props;
    const { value } = this.state;

    return (
      <></>)
  }
}

export default BookDatePicker;
