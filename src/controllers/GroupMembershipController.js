/**
 * Controller for group membership endpoints
 */
const service = require('../services/GroupMembershipService')
const helper = require('../common/helper')

/**
 * Get group members
 * @param req the request
 * @param res the response
 */
async function getGroupMembers (req, res) {
  const result = await service.getGroupMembers(
    req.authUser.isMachine ? 'M2M' : req.authUser,
    req.params.groupId,
    req.query
  )
  helper.setResHeaders(req, res, result)
  res.send(result)
}

/**
 * Add group member
 * @param req the request
 * @param res the response
 */
async function addGroupMember (req, res) {
  console.log(req)
  const result = await service.addGroupMember(
    req.authUser.isMachine ? 'M2M' : req.authUser,
    req.params.groupId,
    req.body
  )
  res.send(result)
}

/**
 * Get group member
 * @param req the request
 * @param res the response
 */
async function getGroupMember (req, res) {
  const result = await service.getGroupMember(
    req.authUser.isMachine ? 'M2M' : req.authUser,
    req.params.groupId,
    req.params.memberId
  )
  res.send(result)
}

/**
 * Delete group member
 * @param req the request
 * @param res the response
 */
async function deleteGroupMember (req, res) {
  const result = await service.deleteGroupMember(
    req.authUser.isMachine ? 'M2M' : req.authUser,
    req.params.groupId,
    req.params.memberId
  )
  res.send(result)
}

/**
 * Get group members count
 * @param req the request
 * @param res the response
 */
async function getGroupMembersCount (req, res) {
  const result = await service.getGroupMembersCount(
    req.params.groupId,
    req.query
  )
  res.send(result)
}

module.exports = {
  getGroupMembers,
  addGroupMember,
  getGroupMember,
  deleteGroupMember,
  getGroupMembersCount
}
