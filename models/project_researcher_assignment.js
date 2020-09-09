const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class ProjectResearcherAssoc extends Sequelize.Model {}
    ProjectResearcherAssoc.init({
        projectId: {
            type: Sequelize.INTEGER,
            allowNull: false
            /*,
            references: {
                model: 'projects',
                key: 'id'
            },
            onDelete: 'cascade'
            */
        },
        researcherId: {
            type: Sequelize.INTEGER,
            allowNull: false
            /*,
            references: {
                model: 'researchers',
                key: 'id'
            },
            onDelete: 'cascade'
            */
        }

    }, {
        sequelize,
        modelName: 'project_researcher_association'});
    return ProjectResearcherAssoc 
}

