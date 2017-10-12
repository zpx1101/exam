class Subject{
    constructor(typeId,departmentId,levelId,topicId,stem,analysis,answer){
		this.typeId = typeId;
		this.departmentId = departmentId;
		this.levelId = levelId;
		this.topicId = topicId;
		this.stem = stem;
		this.analysis = analysis;
		this.answer = answer;
    }
}

module.exports = Subject;