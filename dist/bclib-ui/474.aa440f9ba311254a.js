"use strict";(self.webpackChunkbclib_ui=self.webpackChunkbclib_ui||[]).push([[474],{9474:(bt,b,o)=>{o.r(b),o.d(b,{USERS_ROUTES:()=>Ct});var d=o(2787),_=o(1374),m=o(5195),f=o(2296),c=o(2032),p=o(9157),u=o(5313),C=o(3365),Z=o(3566),t=o(5879),A=o(2048);function x(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," ID "),t.qZA())}function N(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.id," ")}}function I(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," First "),t.qZA())}function Y(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.first_name," ")}}function Q(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," Last "),t.qZA())}function J(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.last_name," ")}}function S(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," Username "),t.qZA())}function y(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.username," ")}}function E(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," Role "),t.qZA())}function L(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.role," ")}}function w(e,i){1&e&&(t.TgZ(0,"th",18),t._uU(1," Status "),t.qZA())}function P(e,i){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.status," ")}}function k(e,i){1&e&&(t.TgZ(0,"th",20),t._uU(1," Action "),t.qZA())}function D(e,i){if(1&e&&(t.TgZ(0,"td",19)(1,"a",21),t._uU(2,"Edit"),t.qZA()()),2&e){const n=i.$implicit;t.xp6(1),t.MGl("routerLink","edit/",n.id,"")}}function B(e,i){1&e&&t._UZ(0,"tr",22)}function O(e,i){1&e&&t._UZ(0,"tr",23)}const R=function(){return[10,20,50]};let j=(()=>{class e{constructor(n){this.accountService=n,this.displayedColumns=["id","first_name","last_name","username","role","status","action"]}ngOnInit(){this.getUsers()}getUsers(){this.accountService.getAll().pipe((0,_.P)()).subscribe(n=>{this.users=n,this.dataSource=new u.by(this.users),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}filterChange(n){this.dataSource.filter=n.target.value}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(A.BR))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(a,r){if(1&a&&(t.Gf(C.NW,5),t.Gf(Z.YE,5)),2&a){let l;t.iGM(l=t.CRH())&&(r.paginator=l.first),t.iGM(l=t.CRH())&&(r.sort=l.first)}},standalone:!0,features:[t.jDz],decls:36,vars:6,consts:[[2,"margin","1%"],[2,"margin-top","1%","margin-left","1%"],["matInput","","placeholder","Search here...",3,"keyup"],["routerLink","add","mat-raised-button","","color","primary",2,"margin-left","80%"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-sort-header","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","first_name"],["matColumnDef","last_name"],["matColumnDef","username"],["matColumnDef","role"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],["mat-sort-header","","mat-header-cell",""],["mat-cell",""],["mat-header-cell",""],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(a,r){1&a&&(t.TgZ(0,"mat-card",0)(1,"h2",1),t._uU(2,"Users"),t.qZA(),t.TgZ(3,"mat-card-header")(4,"mat-form-field")(5,"input",2),t.NdJ("keyup",function(h){return r.filterChange(h)}),t.qZA()(),t.TgZ(6,"button",3),t._uU(7,"Add User"),t.qZA()(),t.TgZ(8,"mat-card-content")(9,"table",4),t.ynx(10,5),t.YNc(11,x,2,0,"th",6),t.YNc(12,N,2,1,"td",7),t.BQk(),t.ynx(13,8),t.YNc(14,I,2,0,"th",6),t.YNc(15,Y,2,1,"td",7),t.BQk(),t.ynx(16,9),t.YNc(17,Q,2,0,"th",6),t.YNc(18,J,2,1,"td",7),t.BQk(),t.ynx(19,10),t.YNc(20,S,2,0,"th",6),t.YNc(21,y,2,1,"td",7),t.BQk(),t.ynx(22,11),t.YNc(23,E,2,0,"th",6),t.YNc(24,L,2,1,"td",7),t.BQk(),t.ynx(25,12),t.YNc(26,w,2,0,"th",6),t.YNc(27,P,2,1,"td",7),t.BQk(),t.ynx(28,13),t.YNc(29,k,2,0,"th",14),t.YNc(30,D,3,1,"td",7),t.BQk(),t.YNc(31,B,1,0,"tr",15),t.YNc(32,O,1,0,"tr",16),t.qZA()(),t._UZ(33,"br"),t.TgZ(34,"mat-card-footer"),t._UZ(35,"mat-paginator",17),t.qZA()()),2&a&&(t.xp6(9),t.Q6J("dataSource",r.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(3),t.Q6J("pageSize",10)("pageSizeOptions",t.DdM(5,R)))},dependencies:[d.rH,m.QW,m.a8,m.dn,m.rt,m.dk,f.ot,f.lW,c.c,c.Nt,p.KE,p.lN,u.p0,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,C.TU,C.NW,Z.JX,Z.YE,Z.nU],encapsulation:2})}return e})();var T=o(6814),s=o(6223),U=o(8525),F=o(4283),z=o(7296),q=o(9744);function G(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"First Name is required"),t.qZA())}function K(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,G,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.first_name.errors.required)}}function M(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Last Name is required"),t.qZA())}function H(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,M,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.last_name.errors.required)}}function X(e,i){if(1&e&&t._UZ(0,"input",19),2&e){const n=t.oxw();t.s9C("value",n.username)}}function V(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Username is required"),t.qZA())}function W(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,V,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.username.errors.required)}}function $(e,i){1&e&&(t.TgZ(0,"em"),t._uU(1,"(Leave blank to keep the same password)"),t.qZA())}function tt(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Password is required"),t.qZA())}function et(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function nt(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,tt,2,0,"span",3),t.YNc(2,et,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.password.errors.minlength)}}function rt(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Email is required"),t.qZA())}function it(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,rt,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.email.errors.required)}}function st(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Role is required"),t.qZA())}function at(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,st,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.role.errors.required)}}function ot(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Status is required"),t.qZA())}function mt(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,ot,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.status.errors.required)}}function ut(e,i){1&e&&t._UZ(0,"span",20)}const g=function(e){return{"is-invalid":e}};let v=(()=>{class e{constructor(n,a,r,l,h){this.formBuilder=n,this.route=a,this.router=r,this.accountService=l,this.alertService=h,this.loading=!1,this.submitting=!1,this.submitted=!1,this.username="",this.options={autoClose:!0,keepAfterRouteChange:!0}}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({first_name:["",s.kI.required],last_name:["",s.kI.required],username:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],role:[F.u.User,s.kI.required],status:[z.qb.ENABLED,s.kI.required],password:["",[s.kI.minLength(6),...this.id?[]:[s.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.username=this.form.get("username")?.value,this.accountService.getById(this.id).pipe((0,_.P)()).subscribe(n=>{this.form.patchValue(n),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,_.P)()).subscribe({next:()=>{this.alertService.success("User saved",this.options),this.router.navigateByUrl("/users")},error:n=>{this.alertService.error(n,this.options),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(s.qu),t.Y36(d.gz),t.Y36(d.F0),t.Y36(A.BR),t.Y36(q.c))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:59,vars:29,consts:[[3,"formGroup","ngSubmit"],[1,"mat-50"],["type","text","formControlName","first_name","matInput","",3,"ngClass"],[4,"ngIf"],["type","text","formControlName","last_name","matInput","",3,"ngClass"],["matInput","","disabled","",3,"value",4,"ngIf"],["type","text","formControlName","username","matInput","",3,"ngClass"],["type","text","formControlName","password","matInput","",3,"ngClass"],["type","text","formControlName","email","matInput","",3,"ngClass"],["matNativeControl","","required","","formControlName","role","matInput",""],["value","User"],["value","Admin"],["matNativeControl","","required","","formControlName","status","matInput",""],["value","Enabled"],["value","Disabled"],[2,"margin","2%","text-align","right"],["mat-raised-button","","type","submit","color","primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],["matInput","","disabled","",3,"value"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(a,r){1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(1,"mat-card")(2,"mat-card-header")(3,"h1"),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"mat-form-field",1)(7,"mat-label"),t._uU(8,"First Name"),t.qZA(),t._UZ(9,"input",2),t.YNc(10,K,2,1,"mat-error",3),t.qZA(),t.TgZ(11,"mat-form-field",1)(12,"mat-label"),t._uU(13,"Last Name"),t.qZA(),t._UZ(14,"input",4),t.YNc(15,H,2,1,"mat-error",3),t.qZA(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18,"Username"),t.qZA(),t._uU(19),t.YNc(20,X,1,1,"input",5),t._UZ(21,"input",6),t.YNc(22,W,2,1,"mat-error",3),t.qZA(),t.TgZ(23,"mat-form-field",1)(24,"mat-label"),t._uU(25,"Password "),t.YNc(26,$,2,0,"em",3),t.qZA(),t._UZ(27,"input",7),t.YNc(28,nt,3,2,"mat-error",3),t.qZA(),t.TgZ(29,"mat-form-field",1)(30,"mat-label"),t._uU(31,"Email"),t.qZA(),t._UZ(32,"input",8),t.YNc(33,it,2,1,"mat-error",3),t.qZA(),t.TgZ(34,"mat-form-field",1)(35,"mat-label"),t._uU(36,"Role"),t.qZA(),t.TgZ(37,"select",9)(38,"option",10),t._uU(39,"User"),t.qZA(),t.TgZ(40,"option",11),t._uU(41,"Admin"),t.qZA()(),t.YNc(42,at,2,1,"mat-error",3),t.qZA(),t.TgZ(43,"mat-form-field",1)(44,"mat-label"),t._uU(45,"Status"),t.qZA(),t.TgZ(46,"select",12)(47,"option",13),t._uU(48,"Enabled"),t.qZA(),t.TgZ(49,"option",14),t._uU(50,"Disabled"),t.qZA()(),t.YNc(51,mt,2,1,"mat-error",3),t.qZA()(),t.TgZ(52,"mat-card-footer")(53,"div",15)(54,"button",16),t.YNc(55,ut,1,0,"span",17),t._uU(56," Save "),t.qZA(),t.TgZ(57,"a",18),t._uU(58,"Cancel"),t.qZA()()()()()),2&a&&(t.Q6J("formGroup",r.form),t.xp6(4),t.Oqu(r.title),t.xp6(5),t.Q6J("ngClass",t.VKq(19,g,r.submitted&&r.f.first_name.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.first_name.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(21,g,r.submitted&&r.f.last_name.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.last_name.errors),t.xp6(4),t.hij(" ",r.username," "),t.xp6(1),t.Q6J("ngIf",r.id),t.xp6(1),t.Q6J("ngClass",t.VKq(23,g,r.submitted&&r.f.username.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.username.errors),t.xp6(4),t.Q6J("ngIf",r.id),t.xp6(1),t.Q6J("ngClass",t.VKq(25,g,r.submitted&&r.f.password.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(27,g,r.submitted&&r.f.email.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.email.errors),t.xp6(9),t.Q6J("ngIf",r.submitted&&r.f.role.errors),t.xp6(9),t.Q6J("ngIf",r.submitted&&r.f.status.errors),t.xp6(3),t.Q6J("disabled",r.submitting),t.xp6(1),t.Q6J("ngIf",r.submitting))},dependencies:[T.O5,s.UX,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.Q7,s.sg,s.u,T.mk,d.rH,m.QW,m.a8,m.dn,m.rt,m.dk,p.lN,p.KE,p.hX,p.TO,c.c,c.Nt,f.ot,f.lW,U.LD],styles:["mat-card[_ngcontent-%COMP%]{margin:2%;text-align:left}.mat-mdc-form-field[_ngcontent-%COMP%]{width:98%;margin:1%}.mat-50[_ngcontent-%COMP%]{width:48%;margin:1%}"]})}return e})();function lt(e,i){if(1&e&&t._UZ(0,"input",9),2&e){const n=t.oxw();t.hYB("value","",null==n.user||null==n.user.user?null:n.user.user.first_name," ",null==n.user||null==n.user.user?null:n.user.user.last_name,"")}}function pt(e,i){if(1&e&&t._UZ(0,"input",9),2&e){const n=t.oxw();t.s9C("value",null==n.user||null==n.user.user?null:n.user.user.username)}}function dt(e,i){if(1&e&&t._UZ(0,"input",9),2&e){const n=t.oxw();t.s9C("value",null==n.user||null==n.user.user?null:n.user.user.email)}}function ft(e,i){if(1&e&&t._UZ(0,"input",9),2&e){const n=t.oxw();t.s9C("value",null==n.user||null==n.user.user?null:n.user.user.role)}}function ct(e,i){1&e&&(t.TgZ(0,"em"),t._uU(1,"(Leave blank to keep the same password)"),t.qZA())}function _t(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Password is required"),t.qZA())}function gt(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function ht(e,i){if(1&e&&(t.TgZ(0,"mat-error"),t.YNc(1,_t,2,0,"span",3),t.YNc(2,gt,2,0,"span",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.password.errors.minlength)}}function Zt(e,i){1&e&&t._UZ(0,"span",10)}const Tt=function(e){return{"is-invalid":e}},Ct=[{path:"",component:j},{path:"add",component:v},{path:"edit/:id",component:v},{path:"profile/:id",component:(()=>{class e{constructor(n,a,r,l,h){this.formBuilder=n,this.route=a,this.router=r,this.accountService=l,this.alertService=h,this.loading=!1,this.submitting=!1,this.submitted=!1,this.username="",this.options={autoClose:!0,keepAfterRouteChange:!0},this.accountService.user.subscribe(At=>this.user=At)}ngOnInit(){console.log(this.user?.user),this.id=this.user?.user?.id,this.form=this.formBuilder.group({password:["",[s.kI.minLength(6),...this.id?[]:[s.kI.required]]]}),this.id&&(this.title="Profile",this.loading=!0,this.accountService.getById(this.id).pipe((0,_.P)()).subscribe(n=>{this.form.patchValue(n),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,_.P)()).subscribe({next:()=>{this.alertService.success("User saved",this.options),this.submitting=!1,this.router.navigateByUrl("/users/profile/"+this.user?.user?.id)},error:n=>{this.alertService.error(n,this.options),this.submitting=!1}}))}saveUser(){return this.accountService.update(this.id,this.form.value)}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(s.qu),t.Y36(d.gz),t.Y36(d.F0),t.Y36(A.BR),t.Y36(q.c))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["profile-component"]],standalone:!0,features:[t.jDz],decls:35,vars:13,consts:[[3,"formGroup","ngSubmit"],[1,"mat-50"],["matInput","","disabled","",3,"value",4,"ngIf"],[4,"ngIf"],["type","text","formControlName","password","matInput","",3,"ngClass"],[2,"margin","2%","text-align","right"],["mat-raised-button","","type","submit","color","primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/home",1,"btn","btn-link"],["matInput","","disabled","",3,"value"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(a,r){1&a&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(1,"mat-card")(2,"mat-card-header")(3,"h1"),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"mat-form-field",1)(7,"mat-label"),t._uU(8,"Full Name"),t.qZA(),t.YNc(9,lt,1,2,"input",2),t.qZA(),t.TgZ(10,"mat-form-field",1)(11,"mat-label"),t._uU(12,"Username"),t.qZA(),t.YNc(13,pt,1,1,"input",2),t.qZA(),t.TgZ(14,"mat-form-field",1)(15,"mat-label"),t._uU(16,"Email"),t.qZA(),t.YNc(17,dt,1,1,"input",2),t.qZA(),t.TgZ(18,"mat-form-field",1)(19,"mat-label"),t._uU(20,"Role"),t.qZA(),t.YNc(21,ft,1,1,"input",2),t.qZA(),t.TgZ(22,"mat-form-field",1)(23,"mat-label"),t._uU(24,"Password "),t.YNc(25,ct,2,0,"em",3),t.qZA(),t._UZ(26,"input",4),t.YNc(27,ht,3,2,"mat-error",3),t.qZA()(),t.TgZ(28,"mat-card-footer")(29,"div",5)(30,"button",6),t.YNc(31,Zt,1,0,"span",7),t._uU(32," Save "),t.qZA(),t.TgZ(33,"a",8),t._uU(34,"Cancel"),t.qZA()()()()()),2&a&&(t.Q6J("formGroup",r.form),t.xp6(4),t.Oqu(r.title),t.xp6(5),t.Q6J("ngIf",r.id),t.xp6(4),t.Q6J("ngIf",r.id),t.xp6(4),t.Q6J("ngIf",r.id),t.xp6(4),t.Q6J("ngIf",r.id),t.xp6(4),t.Q6J("ngIf",r.id),t.xp6(1),t.Q6J("ngClass",t.VKq(11,Tt,r.submitted&&r.f.password.errors)),t.xp6(1),t.Q6J("ngIf",r.submitted&&r.f.password.errors),t.xp6(3),t.Q6J("disabled",r.submitting),t.xp6(1),t.Q6J("ngIf",r.submitting))},dependencies:[T.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.mk,d.rH,m.QW,m.a8,m.dn,m.rt,m.dk,p.lN,p.KE,p.hX,p.TO,c.c,c.Nt,f.ot,f.lW,U.LD],styles:["mat-card[_ngcontent-%COMP%]{margin:2%;text-align:left}.mat-mdc-form-field[_ngcontent-%COMP%]{width:98%;margin:1%}.mat-50[_ngcontent-%COMP%]{width:48%;margin:1%}"]})}return e})()}]}}]);