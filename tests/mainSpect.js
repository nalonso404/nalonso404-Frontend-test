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

describe("Manage errors" , function(){
    it ("Define showError", function(){
        expect(typeof showUserRepos).toBe("function")
    })
})