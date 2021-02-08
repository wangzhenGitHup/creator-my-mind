/*
 * @Descripttion: 
 * @version: 
 * @Author: WangZhen
 * @Date: 2021-02-08 15:06:58
 * @LastEditors: WangZhen
 * @LastEditTime: 2021-02-08 5:06:58
 */
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

/* const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
 */

 export enum GameMode{
     GAME_MODE_MIN      = 0,
     GAME_MODE_ROOMHTTP = 1,
     GAME_MODE_ROOMNEW  = 2,
     GAME_MODE_GAMEHTTP = 3,
 }

 //Sever2Client
 export const kInitOpUI = "INIT_OP_UI"; //小游戏为匹配面板
 export const kMatchSucceed = "MATCH_SUCCEED";
 export const kMatchTeamMateSucceed = "MATCH_TEAM_MATE_SUCCEED";
 export const kGameStart = "GAME_START";
 export const kNoAccount = "NO_ACCOUNT";