var express = require('express');
var route = express.Router();
var examDB = require('../db/examDB');
var Subject = require('../model/Subject');

//类型
route.get('/getAllSubjectType',(req,resp)=>{
	examDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//难度
route.get('/getAllSubjectLevel',(req,resp)=>{
	examDB.getAllSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//方向
route.get('/getAllDepartments',(req,resp)=>{
	examDB.getAllDepartments().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//知识点
route.get('/getAllTopics',(req,resp)=>{
	examDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//获取题目
route.post('/getAllSubjects',(req,resp)=>{
	var ids = newArr(req.body['ids[]']);
	// console.log(ids);
	// console.log(req.body);
	examDB.getAllSubjects(ids).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//审核题目是否通过
route.post('/checkSubject',(req,resp)=>{
	var id = req.body['subject.id'];
	var checkState = req.body['subject.checkState'];
	// console.log(id,checkState);
	// console.log(req.body);
	examDB.checkSubject(id,checkState).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//删除题目信息
route.post('/delSubject',(req,resp)=>{
	var id = req.body['id'];
	// console.log(req.body);
	// console.log(id);
	examDB.delSubject(id).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//展示答案
route.post('/getAnswer',(req,resp)=>{
	var id = req.body['id'];
	// console.log(id);
	// console.log(req.body);
	examDB.getAnswer(id).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//模糊查询
route.get('/queryByKey/:keys',(req,resp)=>{
	var key = req.params.keys;
	// console.log(key);
	// console.log(req.params);
	examDB.query(key).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//拿到解析
route.get('/getAnalysis',(req,resp)=>{
	var id = req.query.id;
	// console.log(id);
	// console.log(req.query);
	examDB.getAnalysis(id).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
//添加题目
route.post('/addSubject',(req,resp)=>{
	let subject = new Subject();
	Object.assign(subject,req.body);
	// console.log(subject);
	// console.log(req.body);
	examDB.addSubject(subject).then((data)=>{
		// console.log(data);
		resp.send(data);
	}).catch((err)=>{
		resp.send(err);
	});
});
function newArr(a){
    var arr = [];
    return arr.concat(a);
}
module.exports = route;