import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Player from './player/player';
import Sidebar from './sidebar/sidebar';
import Card from './card/card';
import Volume from './volume/volume';
import './common.scss'

let commonModule = angular.module('app.common', [
  Navbar,
  Player,
  Volume,
  Sidebar,
  User,
  Card,
])
  
.name;

export default commonModule;
