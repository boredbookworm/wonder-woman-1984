scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    info.changeScoreBy(-1)
    music.powerDown.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    info.changeScoreBy(1)
    music.magicWand.play()
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . f f f f f f . . . 
    . f f f f f f f f f f . 
    . f f f f 5 5 f f f f . 
    f f f f 2 5 5 2 f f f f 
    f f f f d d d d f f f f 
    f f f d e d d e d f f f 
    f f f d d d d d d f f f 
    f f f f d d d d f f f f 
    f f d d 2 2 2 2 d d f f 
    f f d 2 2 2 2 2 2 d f f 
    f f 5 2 2 2 2 2 2 5 f f 
    . . d 8 8 8 8 8 8 d . . 
    . . . 8 8 8 8 8 8 . . . 
    . . . . 5 5 5 5 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(20)
