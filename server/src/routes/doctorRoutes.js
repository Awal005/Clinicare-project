import express from "express";
import { verifyAuth, authorizedRoles } from "../middlewares/authenticate.js";
import { validateFormData } from "../middlewares/validateForm.js";
import { cacheMiddleware, clearCache } from "../middlewares/cache.js";
<<<<<<< HEAD
import {
  getAllDoctors,
  updateDoctor,
} from "../controllers/doctorController.js";
=======
import { getAllDoctors, updateDoctor } from "../controllers/doctorController.js";
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
import { validateDoctorAvailabilitySchema } from "../utils/dataSchema.js";

const router = express.Router();

router.get(
  "/all",
  verifyAuth,
  authorizedRoles("admin", "doctor", "nurse", "staff"),
  cacheMiddleware("doctors", 3600),
  getAllDoctors
);

router.patch(
  "/:id/update",
  verifyAuth,
  authorizedRoles("admin"),
  validateFormData(validateDoctorAvailabilitySchema),
  clearCache("doctors"),
  updateDoctor
);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
