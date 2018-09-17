"use strict";

exports.create = async (data) => {
    console.log({name: "Mocked Name", data: data});
};

exports.findAll = async () => {
  return [{name: "Mocker User 1", age: 15}, {name: "Mocker User 2", age: 42}];
};

exports.findById = async (id) => {
  return {name: "Found by id(" + id + ") Mocked User", age: 20};
};

exports.deleteById = async (id) => {
  console.log("deleting user " + id);
};

