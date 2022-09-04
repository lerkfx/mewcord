module.exports = {
$if: "v4",
name: "$alwaysExecute",
code: `$if[$isBot[$authorID]==false]
$setChannelVar[lastUser;]
$wait[5s]
$setChannelVar[lastUser;$authorID]
$else
$endif`
}
  