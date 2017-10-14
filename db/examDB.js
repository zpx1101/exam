var pool = require('./pool');

module.exports = {
	//题目类型
	getAllSubjectType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	//题目难度
	getAllSubjectLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	//题目方向
	getAllDepartments(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	//题目知识点
	getAllTopics(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	//获取题目
	getAllSubjects(ids){
		var sql = "select * from tbl_exam_subject where department_id="+ids[1]+" and subjectLevel_id="+ids[2]+" and subjectType_id="+ids[0]+" and topic_id="+ids[3];
		return pool.execute(sql);
	},
	//题目是否审核通过
	checkSubject(id,checkState){
		var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
		return pool.execute(sql);
	},
	//删除题目
	delSubject(id){
		var sql = "delete from tbl_exam_subject where id="+id;
		return pool.execute(sql);
	},
	//获取答案
	getAnswer(subject_id){
		var sql = "select * from tbl_exam_choice where subject_id="+subject_id;
		return pool.execute(sql);
	},
	//模糊查询
	query(key){
		var sql = "select * from tbl_exam_subject where stem like '%"+key+"%'";
		return pool.execute(sql);
	},
	//获取解析
	getAnalysis(id){
		var sql = "select * from tbl_exam_subject where id="+id;
		return pool.execute(sql);
	},
	//添加题目
	addSubject(subject){
		var sql = "insert into tbl_exam_subject(id,analysis,answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id) values(null,'"
		+subject.analysis+"','"
		+subject.answer+"','未审核','"
		+subject.stem+"',"
		+subject.departmentId+","
		+subject.levelId+","
		+subject.typeId+","
		+subject.topicId+");";
    	return pool.execute(sql);
	},
	addChoice(content,correct,subjectId){
		for(var i=0; i<content.length; i++){
			// console.log(i);
			var sql = "insert into tbl_exam_choice values(null,'"+content[i]+"',"+correct[i]+","+subjectId+")";
			return pool.execute.call(sql);
		}
	}
}