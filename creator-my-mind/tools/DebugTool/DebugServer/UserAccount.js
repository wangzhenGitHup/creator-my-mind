/*
 * @Descripttion: 用户账号类
 * @version: 
 * @Author: WangZhen
 * @Date: 2020-12-30 15:55:19
 * @LastEditors: WangZhen
 * @LastEditTime: 2020-12-30 15:59:00
 */


 class UserAccount{
     constructor(uid, password){
         this._uid = uid;
         this._password = password;
         this._bchat_link = false;
         this._bgame_link = false;
         this._game_config = null;
     }

     setGameConfig(cfg){
         this._game_config = cfg;
     }

     getGameConfig(){
         return this._game_config;
     }

     clearChat(){
         this._bchat_link = false;
         this._game_config = null;
     }

     clearGame(){
         this._bgame_link = false;
     }

     setChatLinkState(bState){
         this._bchat_link = bState;
     }

     getChatLinkState(){
         return this._bchat_link;
     }

     getUID(){
         return this._uid;
     }

     getPassword(){
         return this._password;
     }
 }

 module.exports = UserAccount;