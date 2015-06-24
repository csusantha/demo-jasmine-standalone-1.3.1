describe("MyObject", function () {
    var obj = new MyObject("clean"); // sets initial state

    //afterEach(function () {
    //    obj.setState("clean");
    //});

    beforeEach(function () {
        obj.setState("clean");
    });

    it("changes state", function () {
        obj.setState("dirty");
        expect(obj.getState()).toEqual("dirty");
    })
    it("adds states", function () {
        obj.addState("packaged");
        expect(obj.getState()).toEqual(["clean", "packaged"]);
    })
});
