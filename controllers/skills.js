import { mySkills } from '../data/skills-data.js'


function index(req, res) {
  res.render('skills/index', {
    mySkills
  })

}

export {
  index
}

