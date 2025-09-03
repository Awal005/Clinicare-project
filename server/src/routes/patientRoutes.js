import express from "express";
import { authorizedRoles, verifyAuth } from "../middlewares/authenticate.js";
import { validateFormData } from "../middlewares/validateForm.js";
import { validatePatientSchema } from "../utils/dataSchema.js";
import { cacheMiddleware, clearCache } from "../middlewares/cache.js";
<<<<<<< HEAD
import { getAllPatients, getPatient, register, updatePatient } from "../controllers/patientController.js";
=======
import {
  getAllPatients,
  getPatient,
  register,
  updatePatient,
} from "../controllers/patientController.js";
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424

const router = express.Router();

router.post(
  "/register",
  verifyAuth,
  authorizedRoles("admin", "patient"),
  validateFormData(validatePatientSchema),
  clearCache("auth_user"),
  register
);

router.get("/me", verifyAuth, cacheMiddleware("patient", 3600), getPatient);

router.patch(
  "/:id/update",
  verifyAuth,
  authorizedRoles("admin", "patient"),
  validateFormData(validatePatientSchema),
  clearCache("patient"),
  updatePatient
);

router.get(
  "/all",
  verifyAuth,
<<<<<<< HEAD
  authorizedRoles("admin", "doctor", "nurse", "staff"),
=======
  authorizedRoles("admin", "doctor", "staff", "nurse"),
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
  cacheMiddleware("patients", 3600),
  getAllPatients
);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> ea763302ae43cde54ed240e6537ac84f91c59424
