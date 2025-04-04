const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  unlikeItem,
} = require("../controllers/clothingItems");
const authorize = require("../middlewares/auth");
const {
  validateCardBody,
  validateIdParams,
} = require("../middlewares/validation");

router.get("/", getItems);

router.use(authorize);

router.post("/", validateCardBody, createItem);

router.delete("/:itemId", validateIdParams, deleteItem);

router.put("/:itemId/likes", validateIdParams, likeItem);

router.delete("/:itemId/likes", validateIdParams, unlikeItem);

module.exports = router;