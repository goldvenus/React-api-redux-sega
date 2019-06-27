import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Select, Button, Input } from 'antd';
import 'antd/dist/antd.css';

import {
  getFirstList,
  getSecondList,
  getThirdList,
  getForthList,
  submitData
} from "../Redux/common/actions";
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFirstList();
  }

  state = {
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: ''
  };

  onChange = (field) => value => {
    if (value !== '') {
      this.setState({
        [`select${field}`]: true,
        [`value${field}`]: value,
      });

      let action = null;
      let params = {};
      switch (field) {
        case 1:
          action = this.props.getSecondList;
          params.first = value;
          break;
        case 2:
          action = this.props.getThirdList;
          params.first = this.state.value1;
          params.second = value;
          break;
        case 3:
          action = this.props.getForthList;
          params.first = this.state.value1;
          params.second = this.state.value2;
          params.third = value;
          break;
        default:
          break;
      }

      if (action) {
        action(params);
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value5: e.target.value,
    })
  };

  onSubmit = () => {
    const {
      value1,
      value2,
      value3,
      value4,
      value5
    } = this.state;

    if (value1 && value2 && value3 && value4 && value5) {
      this.props.submitData({
        first: value1,
        second: value2,
        third: value3,
        forth: value4,
        other: value5
      });
    }
  };

  render() {
    const {
      isLoadingList,
      firstList,
      secondList,
      thirdList,
      forthList
    } = this.props;

    // if (isLoadingList) {
    //   return <div>Loading...</div>;
    // }

    const {
      select1,
      select2,
      select3,
      select4,
      value1,
      value2,
      value3,
      value4,
      value5
    } = this.state;

    return (
      <div className="parent_div">
        <div className="group_dropdown">
          <p>First DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            value={value1}
            onChange={this.onChange(1)}
          >
            {
              firstList.map((item, key) => (
                <Select.Option value={item.value} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className="group_dropdown">
          <p>Second DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!select1}
            value={value2}
            onChange={this.onChange(2)}
          >
            {
              secondList && secondList.map((item, key) => (
                <Select.Option value={item.value} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className="group_dropdown">
          <p>Third DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!select2}
            value={value3}
            onChange={this.onChange(3)}
          >
            {
              thirdList && thirdList.map((item, key) => (
                <Select.Option value={item.value} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className="group_dropdown">
          <p>Forth DropDown</p>
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Select a person"
            disabled={!select3}
            value={value4}
            onChange={this.onChange(4)}
          >
            {
              forthList && forthList.map((item, key) => (
                <Select.Option value={item.value} key={key}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </div>
        <div className="group_dropdown">
          <p>Input to be POSTed with the other data</p>
          <Input
            placeholder="Enter Some text"
            style={{ width: 300 }}
            onChange={this.onChangeInput}
          />
        </div>
        <div>
          <Button
            type="primary"
            disabled={!(select4 && value5)}
            style={{ width: 300 }}
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingList: state.common.isLoading,
  firstList: state.common.firstList,
  secondList: state.common.secondList,
  thirdList: state.common.thirdList,
  forthList: state.common.forthList,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({
    getFirstList,
    getSecondList,
    getThirdList,
    getForthList,
    submitData
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
