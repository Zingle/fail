/**
 * Print error and exit.
 * @param {Error} err
 * @param {number} [status]
 */
function fail(err, status=1) {
    console.log(process.env.DEBUG ? err.stack : err.message);
    process.exit(status);
}

module.exports = fail;
