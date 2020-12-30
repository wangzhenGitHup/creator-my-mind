/*
 * @Descripttion: 用户账号管理类
 * @version: 
 * @Author: WangZhen
 * @Date: 2020-12-30 16:01:31
 * @LastEditors: WangZhen
 * @LastEditTime: 2020-12-30 16:10:29
 */

 var UserAccount = require("./UserAccount");
 var UserPool = require("./UserPool");

 class UserAccountManager{
     constructor(){
         this.initUserAccountManager();
     }

     static getInstance(){
         return UserAccountManager.s_instance || (UserAccountManager.s_instance = new UserAccountManager());
     }

     initUserAccountManager(){
         this._user_account_list = [];
         console.log("UserPool Data: ", JSON.stringify(UserPool.UserPool));
         for(let i = 0; i < UserPool.UserPool.length; i++){
             let user = new UserAccount(UserPool.UserPool[i].uid, UserPool.UserPool[i].password);
             this._user_account_list.push(user);
         }
     }

     getAvailableChatUser(){
         let len = this._user_account_list.length;
         for(let i = 0; i < len; i++){
             if(!this._user_account_list[i].getChatLinkState()){
                return this._user_account_list[i];
             }
         }

         return null;
     }
 }

 module.exports = UserAccountManager;