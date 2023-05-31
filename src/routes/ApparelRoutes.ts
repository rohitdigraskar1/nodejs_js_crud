import express from "express";
export const router = express.Router();
import {
  getApparels,
  getApparel,
  addApparel,
  updateApparel,
  deleteApparel,
} from "../controllers/ApparelController";

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
  

  router.route("/api/apparels").get(getApparels);
/**
 * @openapi
 * components:
 *  schemas:
 *    add_Apparel:
 *      type: object
 *      required:
 *        - apparelType
 *        - code
 *        - size
 *        - quantity
 *        - price
 *      properties:
 *        apparelType:
 *          type: string
 *          default: shirt
 *        code:
 *          type: string
 *          default: SS1234
 *        size:
 *          type: string
 *          default: M
 *        quantity:
 *          type: number
 *          default: 10
 *        price:
 *          type: number
 *          default: 999
 *    apparel_Added_Response:
 *      type: object
 *      properties:
 *        apparelType:
 *          type: string
 *        code:
 *          type: string
 *        size:
 *          type: string
 *        quantity:
 *          type: number
 *        price:
 *          type: number
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

  router.route("/api/apparels").post(addApparel);
/**
 * @openapi
 * components:
 *  schema:
 *    ApparelCode:
 *      type: object
 *      required:
 *        - apparelType
 *        - code
 *        - size
 *        - quantity
 *        - price
 *      properties:
 *        apparelType:
 *          type: string
 *        code:
 *          type: string
 *        size:
 *          type: string
 *        quantity:
 *          type: number
 *        price:
 *          type: number
 */
  /**
   * @openapi
   * '/api/apparels/{code}':
   *  get:
   *   tags: 
   *    - Get Apparel
   *   summary: Get a single apparel by apparel code
   *   parameters:
   *     - name: code
   *       in: path
   *       description: the code of the apparel
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
   * '/api/apparels/{code}':
   *  delete:
   *   tags: 
   *    - Delete Apparel
   *   summary: Delete apparel by apparel code
   *   parameters:
   *     - name: code
   *       in: path
   *       description: the code of the apparel
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
   router
    .route("/api/apparels/:code")
    .get(getApparel)
    .put(updateApparel)
    .delete(deleteApparel);
    module.exports = router;