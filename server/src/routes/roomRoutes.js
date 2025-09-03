import express from "express";
import { authorizedRoles, verifyAuth } from "../middlewares/authenticate.js";
import { validateFormData } from "../middlewares/validateForm.js";
import { validateRoomSchema } from "../utils/dataSchema.js";
<<<<<<< HEAD
import { clearCache, cacheMiddleware } from "../middlewares/cache.js";
import { createRoom, getAllRooms, getRoomMeta, updateRoom } from "../controllers/roomController.js";

const router = express.Router();

router.get(
    "/meta",
    verifyAuth,
    authorizedRoles("admin"),
    cacheMiddleware("room_meta", 3600),
    getRoomMeta
);

router.post(
    "/create",
    verifyAuth,
    authorizedRoles("admin"),
    validateFormData(validateRoomSchema),
    clearCache("rooms"),
    createRoom
=======
import { createRoom, getAllRooms, getRoomMeta, updateRoom } from "../controllers/roomController.js";
import { cacheMiddleware, clearCache } from "../middlewares/cache.js";

const router = express.Router();

router.post(
  "/create",
  verifyAuth,
  authorizedRoles("admin"),
  validateFormData(validateRoomSchema),
  clearCache("rooms"),
  createRoom
);

router.get(
  "/meta",
  verifyAuth,
  authorizedRoles("admin"),
  cacheMiddleware("room_meta", 30000),
  getRoomMeta
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
);

router.get(
  "/all",
  verifyAuth,
  authorizedRoles("admin"),
  cacheMiddleware("rooms", 10600),
  getAllRooms
);

router.patch(
  "/:id/update",
  verifyAuth,
  authorizedRoles("admin"),
  validateFormData(validateRoomSchema),
  clearCache("rooms"),
  updateRoom
);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
