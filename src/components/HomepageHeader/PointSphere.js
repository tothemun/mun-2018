import React, { Component } from 'react';
import DraggableCube from './DraggableCube';
import * as THREE from 'three';


function doThings(text, callback) {
  console.log(text);
  callback();
}

doThings('hello', function() {
  console.log('My');
});




var skewAmount = Math.max(Math.min(diff * 0.5, 5), -5);

var skewAmount = Math.min(diff * 0.5, 5);
skewAmount = Math.max(skewAmount, -5);
