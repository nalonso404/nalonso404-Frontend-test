//  describe('fetchs the input user', function() {
//     beforeEach(function() {
//         return new Promise(function(resolve, reject) {
//           resolve();
//         });
//       });
      
//       it('gets user data', function() {
//         return connectToApiUser().then(function (result) {
//           expect(result).toBe("object");
//         });
//       });
// });


describe("Manage user's data" , function(){
    it ("Define showUserInfo", function(){
        expect(typeof showUserInfo).toBe("function")
    })
})

describe("Manage user's repos" , function(){
    it ("Define showUserRepos", function(){
        expect(typeof showUserRepos).toBe("function")
    })
})

describe("Removes previous data from other user" , function(){
    it ("Define removePreviousDataUser", function(){
        expect(typeof removePreviousDataUser).toBe("function")
    })
})

describe("Manage errors" , function(){
    it ("Define showError", function(){
        expect(typeof showUserRepos).toBe("function")
    })
})

describe("Removes the error container in case the user exists" , function(){
    it ("Define function removeErrorContainer", function(){
        expect(typeof removeErrorContainer).toBe("function")
    })
})