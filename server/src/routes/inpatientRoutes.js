import express from "express";
import { verifyAuth, authorizedRoles } from "../middlewares/authenticate.js";
import { cacheMiddleware, clearCache } from "../middlewares/cache.js";
import { validateFormData } from "../middlewares/validateForm.js";
import { validateInpatientSchema } from "../utils/dataSchema.js";
import {
  getAllInpatients,
  register,
  updateInpatient,
} from "../controllers/inpatientController.js";

const router = express.Router();

router.post(
  "/register",
  verifyAuth,
  authorizedRoles("admin"),
  validateFormData(validateInpatientSchema),
<<<<<<< HEAD
  clearCache("inpatients"), clearCache("rooms"),
=======
  clearCache("inpatients"),
  clearCache("rooms"),
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  register
);

router.get(
  "/all",
  verifyAuth,
  authorizedRoles("admin", "doctor"),
  cacheMiddleware("inpatients", 3600),
  getAllInpatients
);

router.patch(
  "/:id/update",
  verifyAuth,
  authorizedRoles("admin"),
  validateFormData(validateInpatientSchema),
<<<<<<< HEAD
  clearCache("inpatients"), clearCache("rooms"),
  updateInpatient
);

export default router;
=======
  clearCache("inpatients"),
  clearCache("rooms"),
  updateInpatient
);

export default router;
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
