/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `TestController.testSet()`
   */
  testSet: function (req, res) {
  
    req.session.testVar = "I am the test var!";
  
    return res.ok();
  },


  /**
   * `TestController.testGet()`
   */

  testGet: function (req, res) {
    return res.json({
      testVar: req.session.testVar
    });
  }
  
};

