const expect = require("expect.js");
const sinon = require("sinon");
const fail = require("../fail");

describe("fail(Error)", () => {
    var exit;

    beforeEach(() => {
        exit = process.exit;
        process.exit = sinon.spy();
    });

    afterEach(() => {
        process.exit = exit;
    });

    it("should call process.exit(1)", () => {
        fail(new Error());
        expect(process.exit.calledOnce).to.be(true);
        expect(process.exit.calledWith(1)).to.be(true);
    });
});

describe("fail(Error, number)", () => {
    var exit;

    beforeEach(() => {
        exit = process.exit;
        process.exit = sinon.spy();
    });

    afterEach(() => {
        process.exit = exit;
    });

    it("should call process.exit with status code", () => {
        fail(new Error(), 13);
        expect(process.exit.calledOnce).to.be(true);
        expect(process.exit.calledWith(13)).to.be(true);
    });
})
