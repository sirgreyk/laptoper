const Laptoper = require('../models/laptoper')
const Department = require('../models/department')
const Specs = require('../models/specs')
const Promo = require('../models/promo')
const Blog = require('../models/blog')
const path = require('path')
const fs = require('fs')
//add error handlers to "get" and "del" controllers &&& also add "edit" controllers
//mainCarousel

exports.main_carousel_get = async (req, res, next) => {
  try {
    const laptoper = await Laptoper.findOne({})
    await res.json(laptoper)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.main_carousel_push = async (req, res, next) => {
  try {
    const laptoper = await Laptoper.findOne({})
    await laptoper.mainCarousel.push({
      img: fs.readFileSync(req.files.img[0].path),
      largeImg: fs.readFileSync(req.files.largeImg[0].path),
      url: req.body.url,
    })
    await laptoper.save()
      //for test
      //await res.json(laptoper)
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.main_carousel_pull = async (req, res, next) => {
  try {
    const laptoper = await Laptoper.findOne({})
    await laptoper.mainCarousel.pull(req.body.id)
    await laptoper.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

//specs
exports.specs_get = async (req, res, next) => {
  try {
      const specs = await Specs.findOne({ catagory: req.body.catagory })
      await res.json(specs)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
//specs admin
exports.specs_get_all = async (req, res, next) => {
  try {
      const specs = await Specs.find({})
      await res.json(specs)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.specs_add = async (req, res, next) => {
  try {
    const body = req.body
    const specs = await Specs.findOne({ catagory: body.catagory })
    if(specs) {
      return await res.status(400).json({message: 'This catagory of spec is exist.'})
    } else {
      const newSpecs = await new Specs({
        catagory: req.body.catagory,
      })
      await newSpecs.save()
      await res.sendStatus(200)
    }
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.specs_del = async (req, res, next) => {
  try {
    await Specs.deleteOne({ catagory: req.body.catagory })
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.spec_add = async (req, res, next) => {
  try {
    const body = req.body
    const specs = await Specs.findOne({ catagory: body.catagory })
    if(specs.specs.find(e => e.specType === body.specType)) {
      return await res.status(400).json({message: 'This specType of specs is exist'})
    } else {
      await specs.specs.push({
        specType: body.specType,
        name: body.name,
        variants: [...body.variants]
      })
      await specs.save()
      await res.sendStatus(200)
    }
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.spec_del = async (req, res, next) => {
  try {
    const specs = await Specs.findOne({ catagory: body.catagory })
    await specs.specs.pull(req.body.id)
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

//Department
exports.department_get = async (req, res, next) => {
  try {
      const department = await Department.find({})
      await res.json(department)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.department_add = async (req, res, next) => {
  try {
    const body = req.body
    const multerpath = await req.file.path;
    const pathWithOriginalName = await path.join(__dirname,`../uploads/${req.file.originalname}`);
    await fs.rename(multerpath, pathWithOriginalName, err => {
      if (err) return res.status(400).json(err)
    })
    const newDepartment = await new Department({
      img: `uploads/${req.file.originalname}`,
      name: body.name,
    }) 
    await newDepartment.save()
    await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.department_del = async (req, res, next) => {
  try {
    await Department.deleteOne({_id: req.body.id})
    await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}

exports.catagory_add = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: req.body.departmentName})
    const multerpath = await req.file.path;
    const pathWithOriginalName = await path.join(__dirname,`../uploads/${req.file.originalname}`);
    await fs.rename(multerpath, pathWithOriginalName, err => {
      if (err) return res.status(400).json(err)
    })
    await department.catagorys.push({
      img: `uploads/${req.file.originalname}`,
      name: body.name,
    }) 
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.catagory_del = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: body.departmentName})
    await department.catagorys.pull(body.id)
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.catagory_designed_add = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: body.departmentName})
    const catagory = await department.catagorys.id(body.catagoryId)
    const multerpath = await req.file.path;
    const pathWithOriginalName = await path.join(__dirname,`../uploads/${req.file.originalname}`);
    await fs.rename(multerpath, pathWithOriginalName, err => {
      if (err) return res.status(400).json(err)
    })
    await catagory.designed.push({
      img: `uploads/${req.file.originalname}`,
      name: body.name,
    }) 
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.catagory_designed_del = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: body.departmentName})
    const catagory = await department.catagorys.id(body.catagoryId)
    await catagory.designed.pull(body.designedId)
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.catagory_brands_add = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: req.body.departmentName})
    const catagory = await department.catagorys.id(body.catagoryId)
    const multerpath = await req.file.path;
    const pathWithOriginalName = await path.join(__dirname,`../uploads/${req.file.originalname}`);
    await fs.rename(multerpath, pathWithOriginalName, err => {
      if (err) return res.status(400).json(err)
    })
    await catagory.brands.push({
      img: `uploads/${req.file.originalname}`,
      name: body.name,
    }) 
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.catagory_brands_del = async (req, res, next) => {
  try {
    const body = req.body
    const department = await Department.findOne({ name: body.departmentName})
    const catagory = await department.catagorys.id(body.catagoryId)
    await catagory.brands.pull(body.brandsId)
    await department.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}


//PROMOS
exports.promos_get = async (req, res, next) => {
  try {
      const promos = await Promo.find({})
      await promos.forEach(promo => {
        promo.condition = undefined,
        promo.description = undefined
     })
      await res.json(promos)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.promo_get = async (req, res, next) => {
  try {
      const promo = await Promo.findOne({ _id: req.params.id})
      await res.json(promo)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
//PROMOS admin
exports.promo_add = async (req, res, next) => {
  try {
    const body = req.body
    const newPromo = await new Promo({
      img: fs.readFileSync(req.files.img[0].path),
      name: body.name,
      types: { 
        share: body.share,
        discount: body.discount,
        gift: body.gift,
        pre_order: body.pre_order,
      },
      condition: body.condition,
      description: body.description,
      start: body.start,
      end: body.end,
      active: body.active
    })
    //test
    console.log(body)
    console.log(newPromo)
    await newPromo.save()
    await res.json(newPromo)
    
    //await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.promo_del = async (req, res, next) => {
  try {
    await Promo.deleteOne({_id: req.body.id})
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

//blog
exports.blog_get = async (req, res, next) => {
  try {
      const blog = await Blog.find({})
      await blog.forEach(post => {
        post.post = undefined
      })
      await res.json(blog)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.post_get = async (req, res, next) => {
  try {
      const post = await Blog.findOne({ _id: req.body.id})
      await res.json(post)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
//blog admin
exports.post_add = async (req, res, next) => {
  try {
    const body = req.body
    const newPost = await new Blog({
      name: body.name,
      date: body.date,
      type: body.type,
      post: body.post,
    })
    await newPost.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.post_del = async (req, res, next) => {
  try {
    await Blog.deleteOne({_id: req.body.id})
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}


//ADMIN CONTROLLERS TO UPDATE DATE IN LAPTOPER


