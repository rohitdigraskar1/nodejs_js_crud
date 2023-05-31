import express from "express";
export const router = express.Router();
import {
  getAllApparels,
  getApparelById,
  createApparel,
  updateApparel,
  deleteApparel,
  // vendorDetails,
  // verify,
} from "../controllers/apparelcontroller";

 /**
   * @openapi
   * /api/apparels:
   *  get:
   *     tags:
   *     - Get Apparels
   *     description: Responds if the app is up and running
   *     responses:
   *       201:
   *         description: App is up and running
   *       200:
   *         description: success.
   */
/**
 * @openapi
 * components:
 *  schemas:
 *    add_Apparel:
 *      type: object
 *      required:
 *        - name
 *        - description
 *        - price
 *        - imageurl
 *      properties:
 *        name:
 *          type: string
 *          default: shirt
 *        description:
 *          type: string
 *          default: this is the shirt haul
 *        price:
 *          type: float
 *          default: 999.00
 *        imageurl:
 *          type: string
 *          default: http://localhost/img
 *    apparel_Added_Response:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        price:
 *          type: float
 *        imageurl:
 *          type: string
 *        xml:
            name: id
 */
/**
   * @openapi
   * /api/apparels:
   *   post:
   *     tags:
   *     - Add Apparel
   *     summary: Add Apparel
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/add_Apparel'
   *     responses:
   *       201:
   *          description: Success
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/apparel_Added_Response'
   *       400:
   *          description: Bad request
   */
  /**
 * @openapi
 * components:
 *  schema:
 *    ApparelCode:
 *      type: object
 *      required:
 *        - name
 *        - description
 *        - price
 *        - imageurl
 *      properties:
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        price:
 *          type: number
 *        imageurl:
 *          type: string
 */
  /**
   * @openapi
   * '/api/apparels/{id}':
   *  get:
   *   tags: 
   *    - Get Apparel
   *   summary: Get a single apparel by apparel code
   *   parameters:
   *     - name: id
   *       in: path
   *       description: the id of the apparel
   *       required: true
   *   responses:
   *    200:
   *      description: Success
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/ApparelCode'
   *    400:
   *      description: Product with given code not found
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/ApparelCode'
   */
   /**
   * @openapi
   * '/api/apparels/{id}':
   *  delete:
   *   tags: 
   *    - Delete Apparel
   *   summary: Delete apparel by apparel code
   *   parameters:
   *     - name: id
   *       in: path
   *       description: the id of the apparel
   *       required: true
   *   responses:
   *    200:
   *      description: Success
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/ApparelCode'
   *    400:
   *      description: Product with given code not found
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schema/ApparelCode'
   */
  /**
   * @openapi
   * '/api/apparels/{id}':
   *  put:
   *   tags:
   *    - Update Apparel
   *   summary: Update Apparel
   *   parameters:
   *    - name: id
   *      in: path
   *      description: id for apparel that need to be updated.
   *      required: true
   *      schema:
   *       type: number
   *   requestBody:
   *     content:
   *       application/json:
   *         schema:
   *           $ref: '#/components/schema/ApparelCode'
   *     responses:
   *       201:
   *          description: Success
   *          content:
   *           application/json:
   *            schema:
   *              $ref: '#/components/schema/ApparelCode'
   *       400:
   *          description: Bad request
   */
router
  .route("/api/apparels")
  // .get(verify)
  .get(getAllApparels)
  .post(createApparel);
router
  .route("/api/apparels/:id")
  .get(getApparelById)
  .put(updateApparel)
  .delete(deleteApparel);
// router.route("/api/apparels/vendortoken").post(vendorDetails);

module.exports = router;
