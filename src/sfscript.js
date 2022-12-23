(() => {
  var A = {
      data: (A) => {
        A.exports = {
          menu: {
            basket:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA9nV6oiYz5DtE13ZDdD85vkovGBQl2WxtxwAAAAF0Uk5TAEDm2GYAAABOSURBVAjXY2BgLy8vYGBgKHFxcQdSZeXl6QwM7MKF5sIFDMVGSkrK5iApkGRZGhCkM5SHAkE5Q1lqWlhqOkNZGJBOZygFctLCQWYBTQMATTUW2/GKHakAAAAASUVORK5CYII=",
            seeds: {
              sunflower:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAD1BMVEUAAADAy9yLm7Q6RGZaaYi6d6TvAAAAAXRSTlMAQObYZgAAADdJREFUCNdjYDA2ZgACZiVBAyBl6KQoDKJEwFwjQTDXSBHEBSoBcg0gXCAF4gIpIFcYbICxAQMA/GgGlS11AN8AAAAASUVORK5CYII=",
              potato:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUAAAC+Si/kpnLXdkPq1KqvRVofAAAAAXRSTlMAQObYZgAAADJJREFUCNdjYBAUZGBgYFRSEmBgEFI2UgSSxsZADpA0AZLKQBIoa+wCknZxBCkVFGAAAHICBHViDUrAAAAAAElFTkSuQmCC",
              pumpkin:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAElBMVEUAAAA+iUhjx00mXELq1KoZPD7foWQ+AAAAAXRSTlMAQObYZgAAAD1JREFUCNdjYBAUZAACRiclASBl4qSkCKQMhZRAXENBJSAXSIG5rIKCYNFAIBdIAbkuQArIdQYZwGxswAAA2jIF3m6fEg4AAAAASUVORK5CYII=",
              carrot:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAD1BMVEUAAADot5bChWm4b1C+Si9gJ5+ZAAAAAXRSTlMAQObYZgAAADhJREFUCNdjYDA2ZgACZiVBAyDlaKQoDKKEwVwnQTDXSRHMZVECcg0gXCAF4gIpIFcEZACLiwMDAAInBtdXX1mZAAAAAElFTkSuQmCC",
              cabbage:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEUAAAD2dXrot5a1UIhoOGwUwyAbAAAAAXRSTlMAQObYZgAAACtJREFUCNdjYDA2ZmBgFlQyYDAUUlJmcAQTgkrCQEJQmIFFUNCBgcHFhQEAS2AD2E4NOkgAAAAASUVORK5CYII=",
              beetroot:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEUAAAC+Si/kpnLXdkNzPjmQEAD4AAAAAXRSTlMAQObYZgAAACtJREFUCNdjYBAUZGBgVFISYHAWUlJkcDYEEcZCIMJQkYHF2FiAgcHFhQEAS0QEOn3kVt8AAAAASUVORK5CYII=",
              cauliflower:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAD1BMVEUAAADot5b////ChWm4b1Bn6/BIAAAAAXRSTlMAQObYZgAAACtJREFUCNdjYDA2ZmBgFlQyYDAUUlJmcAQTgkrCQEJQmIFFUNCAgcHFhQEASwADyNrjPswAAAAASUVORK5CYII=",
              parsnip:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAADFBMVEUAAADXdkNzPjnkpnKsalE1AAAAAXRSTlMAQObYZgAAAB9JREFUCNdjYFrAwMD9g4FBN46BYWt4AwwD+WBxkDwAo38JBSnOMAkAAAAASUVORK5CYII=",
            },
            tools: {
              axe: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANBAMAAACEMClyAAAAG1BMVEUAAAAYFCVaaYiLm7TAy9y+Si90PznXdkM+JzFHDkyrAAAAAXRSTlMAQObYZgAAAEtJREFUCNdjAAFBAQYwYDQOhDCETRShAk5KAmCGiZKSIpgRpKRkAhISzVBSBjEYSxuFjB2BAuJhAowuYIFEoIlgAaixokABiHFQAQDhBAhtK6bgXwAAAABJRU5ErkJggg==",
            },
            market:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAmCAYAAACCjRgBAAAEAklEQVRYCc2WsW4TQRCGU/EgSDgICoRJQQzEFK6oaGgQFDRIqSC2EgGpkZB4ASSqBOFIQaKiQIpEQcMLhJoijpBCn3Q59K35l7n13t3adwRbGs3uzOzu/8/Mrm9hYU5+l958yxDgaCxtbXMCNw8DoPppLI09HOdXz8EMgE+//BAHp2M2YrDPAeQxhK8vVzPJuXvPPAmAMo/ZFI/+70QAcbS/60WA0dhHw74nIZvi54LA5yd3XQUGK8vZ6cel7MudKw4wmjn2mA3wrG2sApTcija2No2tDxBkGaAnG+c9CcAzj9mIZU0tAlwkNpDsPbztMoWdjKFtjGzS1icC+AB++vORJxKz1SZgDxcBNCTsnDEAkCIfMWdKwIKnD+tKSEAtgxb50FarAspwXeBabwmsLF71PQ9o5jFblIA2PGsNAc4ElJJTpYllDXF6EBYwHH3fzX7tf3A9Sasghzt9Nx/t9P3FHA3X/LvNm1yXtN517kKKKJ5zPQGbCYDrxxjGE7Zux9mViVlJsHcd4Wl2JCBwOBxk/ZVl/8+Hk38/wCN6x7ENbl13JSRjIj8LCcCznl5Hp4hiWZsjcDBc89kGsMDbaojMoNtxhzVJQJc2RUMUArkWAgwA9RMJZT70sUmTBNRKRVWQ31ZgggBZB7AyTTA2VQM7fuZNE0jJvGJUgVwLjd6Pv0nCTLMotJGNugQEAs0Z6BRRLBjyBHYg0HHZxaFMdy+2J2yty73SVwggKZc6BXBZjCfAYXpf6esUUXwK0LIYAQxjqpKw96D7twK6ILPq8PCzmNPW/hKrp9VfykqZ3m4tZVuttr/wbPhucSnbbrUL20f7NUGwkAAkqmTrQjs7Xn+eHd7sZduta+7LEdvJxmZ20BnbQpACLx36Ncevcaitj7G/A7YCaiMdFGqYQxCgBzd6bkzWEQhh51OYOAsg3Mf6NLYxshXpiTvA4qrM4wcYWaddmKOP18eZpwr4kJAAQASwCJRiyvzysb+7A5TBVkCHFOlx+2y67ANU1SD7jI/XXzgfcTrsX2h/gRlAIkUomyog8Mp4OI9VoEkiOQIpEwHS54a+mUScOWP9FN8kaLsX+6fgdjEAo6XYoNN77P+ZBTYGnjitsQdrXOZTjLTaWXM0NnAlkSCQ9mEhwF6//eRJ2KyLCFUqIyBAqSQUbwnkXqEUFlrMRb2/+sqTUEtBBGGOnzitiekY+Jgttla2FNy5GBYCTCQAigBaIvBVBARiVp0DljohwwDj2RWRmJZ/VnBV68CRinkijjILtP61RUrAmVeBqOOfADWtQSSKCEzby9OQmRZrYTxlBKgV3mbmaI3l1zz0hXYOlI21IlerbQpZ/HGwuRXFW5vGRT7ZpcN42UP9G5i9nl+U4AzSAAAAAElFTkSuQmCC",
            settings:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAPNJREFUKJGFkq1ywzAQhD9ngmIq4JIwoxSXh/oROkF+rwR5+gihxim2kVmIDUQj6gJ1Fclp0kMa3d7u3g88icKUc2HK+Vl+HQMBJjtkhSnntt4CsD8x60/5ULgEAoydTdSXREHxeHFUuUOA48UB0NYGEZ1vm0CWxaxfHz5xvm1oeq942Bmq3JN8frtgdRX3FxdNdsgmO2RNnyoJmwxi7GzCunTz9m5++7z64aifKv9z8iGECz1KXqz70zWoypHcgF/JSg8xjZ2lrbfhAFSkEPaB9VXEbpI9wn0NWo3sHXYGoh7Xkm96kpO7r8A95F/a+u/IfwA5PqivgnTkNwAAAABJRU5ErkJggg==",
            exit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAAi5u0GBQl////mo6iugAAAAF0Uk5TAEDm2GYAAAA1SURBVAjXY9BiWsCwv/sHw/z3Nxim/49gUPuXwMD9v4FB//4Dhv3hPxjmpt5gmNoZwQBUBwCl3RKJRykUxQAAAABJRU5ErkJggg==",
          },
          slot: {
            empty:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAABGdBTUEAALGOfPtRkwAAABJQTFRFAAAAcz45Picx5KZyuG9QwoVpdG2/2AAAAAZ0Uk5TAP//////enng/gAAAEtJREFUGJXljsERACEIA8WQ/lu+GAaPHtwHQ3ZAXOs90oxMCLahcggZztxGhRlbxOnogdwm0aJM4u7ICMxXUXd575rOxxj+X60Jtx/G9AIB2PftNQAAAABJRU5ErkJggg==",
          },
          crops: {
            sunflower:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQBAMAAAA/jegKAAAAIVBMVEUAAAC+Si//+U5zPjn/3h8+iUgmXEL7qiD3diJjx03/6zYeKP1jAAAAAXRSTlMAQObYZgAAAF5JREFUCNdjYGBgFAQSQEpICcwQaVJqEQByXdyXuzgC6ZZi45JGBgYhdWNjcyUBBiEtY2MrIA3lQ+UR6iOh+lMDgeaFAunQRMHImQEMbGlsYTNDE4AWsIWlQmm2NAYA4kUWKrbsMb4AAAAASUVORK5CYII=",
            potato:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAElBMVEUAAAC+Si/XdkNzPjnkpnLLYDmz0oQCAAAAAXRSTlMAQObYZgAAADlJREFUCNcVx1EJACAMRdELFvDZwFlAMYFggmH/LG4/Bw5IQLFbYbV3Ur81NO8spUXNOhENIprA3nyusgWmDy02rgAAAABJRU5ErkJggg==",
            pumpkin:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOBAMAAADpk+DfAAAAGFBMVEUAAAC+Si9zPjn3diL+rjQmXEJjx00+iUhGXjSqAAAAAXRSTlMAQObYZgAAAFFJREFUCNdNx8ENgCAQAMHVxL8cFuCdFSA0QEIBfgwVaAdav8rL/UwW2Pkazq1xH21rQ+ql0AWzMuJDKlPG+1jyn5QDi8YoKyrOqdCbis1gbzwoXgtbqqvuUQAAAABJRU5ErkJggg==",
            carrot:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAG1BMVEUAAAD3diK+Si/+rjRjx01Np28mXEI+iUj+52GG4DLwAAAAAXRSTlMAQObYZgAAAENJREFUCNdjYAgNYAACdpcEEBVSkqQEolzKOhQYGMLSiy2EgFw1Y0NBIFfZWBBMGQoKAkWZBMEUgyKEYlIEUiBaSQkAy90I0N5YuEEAAAAASUVORK5CYII=",
            cabbage:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALBAMAAAC5XnFsAAAAD1BMVEUAAAC1UIhoOGz2dXrot5YwyEoYAAAAAXRSTlMAQObYZgAAAERJREFUCNcVx0ERwCAMRcHXKOgPFUDigAEDHfCvqelpZ+Fa+wYe6a1sad3YOKd1rK09fuYsItpwJ1wKx5SpTrUCltn5ABO1BsdsETYaAAAAAElFTkSuQmCC",
            beetroot:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAC1UIhoOGw+iUj2dXpjx00mXEI+JzFke6HEAAAAAXRSTlMAQObYZgAAAGJJREFUCNdjAALjBAYwYA41gzBMg2GMQAjDODUwAaIiOAnMMA0NSyoAMwyVlAoFFRgYko3TylVchBgY2NIY2F1cHBVAsowwBpOIiyCEISgoCNbIoCgopA5mMCkVARlgwF4AAINBD1KIU9UDAAAAAElFTkSuQmCC",
            cauliflower:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAGFBMVEUAAADot5b///8+iUgmXELChWljx00ZPD64+l2iAAAAAXRSTlMAQObYZgAAAFFJREFUCNdjYGAIDWUAAlYhpQAgFaikpArkCCopAbkgShFECSkJBjCwGAoKCjswOCcLCpqZMDinGQqnmTCwGLu4GDswMDibOJsAtbOXlxcwAACJjwsYK+Y3xgAAAABJRU5ErkJggg==",
            parsnip:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOBAMAAADtZjDiAAAAGFBMVEUAAABzPjkmXELq1Kpjx03kpnLXdkM+iUhXz7R4AAAAAXRSTlMAQObYZgAAAEtJREFUCNdjYGBSYgADFRcFEMWk4g6mVdyLGKC0ogCILlIpNgTJK6gbGwuAZMRCjQ3BdHIwmGZMMzWFSKSGgmlGMSANZggmAkmwFAA20wnUnjX+DAAAAABJRU5ErkJggg==",
            raddish:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPBAMAAAAizzN6AAAAHlBMVEUAAACiJjM+iUjkO0QmXEJjx00+JzEZPD72dXpzPjlgdKmRAAAAAXRSTlMAQObYZgAAAGBJREFUCNcdx7EJgDAUhOFfEMXOIDhAVKz1NZYiukAwfbKBZAUXcGQfOY77OMpz13L4+/Ijx+Qmp1jv7UiZrJ13qNP8AN06LFCIyNtmtpbKiJigaAJEY3qgir0eNS/NBz9k1g5Ii+t6RwAAAABJRU5ErkJggg==",
            wheat:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANBAMAAACAxflPAAAAD1BMVEUAAAD3diL/3h/7qiD/+U7mGOxUAAAAAXRSTlMAQObYZgAAADVJREFUCNdjYBQUYAABIWVFGA0WEDaGCAgpQQQYkQUYIAJQHUqOYJpRUFiAAcIyZIAAuIABAAQBBIwhksxUAAAAAElFTkSuQmCC",
            kale: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAD1BMVEUAAAA+iUhjx00mXEIZPD6/6AHTAAAAAXRSTlMAQObYZgAAAEhJREFUCNc1jMENwDAMAskGwZ4AZwLH3aDZf6a6lcoHcUgHYHDijYW+ZVQT0+YygZH0YPPu5qMyvPpfFbUF48WbwvBTJ+fvewALmgb6fQufwwAAAABJRU5ErkJggg==",
          },
          tree: {
            sprites:
              "data:image/png;base64,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",
            stump:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAABGdBTUEAALGOfPtRkwAAASdJREFUKJGNk7FKw1AUhr9bpNgnyCjt0q1wB6FZAg6BjqajTyBdpHQQuohLoIMEF/EJHBPHgEMhS4UOAbcsSsY8gcUlDskNueEW/SHk5ud8h/+cJAKDVo5dmvyHZCe63okJXl7bJh6g7DbRHtrw59e3Ro6GAwCC552WpDk4Y1m+3F00sAKU2t7V/ZYkSwVA71jW/0rbQX8y5efjndFwcHSE/mQKbBtfS7BZBHVBBbQvBW8WgdZYQDX/enbGW1oAcPu0NMZVsCst/DgnyVIhAC++uQwVDLAvDpxbpxrc9VxpMXt8nfcA/DhnXxyawnaRKy2tibr7cQ5US4zqV+KBDI3ZO0mSLJ0DUbODjjxnLEPTCG1QyfQdRHWhJhP8l7yVY5f1j+UdK/oFRRV1szFbJrIAAAAASUVORK5CYII=",
          },
          firePit: {
            base: "data:image/webp;base64,UklGRvwCAABXRUJQVlA4TO8CAAAvLgAIEIfBOAAAI3fZ9su1R0u1VmPZ9hpuBAAgomxttqbe0lt7Ta2260y2kW0rwd3dIjLNiGmApqnhN0Hk7o8g26aMA73iAwCY/w+HIF4Rbst/yJvE7F/taCrz9dT04H98zhq3fluvRqjzDpxEKIogKChox7mCawfgj0Ffkvvy69IH1hlUIUAgHEXQUTiFJWWu41N4k2mobNE3x6QsK8xR4kN+rM6DCM56z8bA5jilk9El1SQ9IoEo4v8NSBQAqGqbM0FTstFW2W4ktMzlRpaAefz/5x0Hdn8Q0X8GkiQ1mTkwKyDhDwCALAhHzpsSC1IfggchDs/nUMKND/cYHUAuZMgdm0UR/Hw6VYFPxCfjlnF4DOPilCIAUpm6jnLwE+vnIGxmjs/85RPOXK9KXa+l3jlIbAjBn04nD3hO7BmVW5blfVkWp7VhZb1DsAJr/cwETCkNQ0oJ3bbvH32/dbpoRL29tRbZqTCfQmFgC/2yDMvSS7QJzE/7A4V2YgJzltlZMAqqMNbaCSsna0OFvPDmpG+6llMbawg2jVv0m7Teao1Tk8n+0gSw2ZzZzYb0isYYjSXELVYUWBsFABsWQLWerbLj56efpCIZTa1+aRrvreL4+88peMSJWERPlKHFfh0/Bx84ZJf1VO5r9vrVA113qAJlPxM1AdJfUHaoORPlcAw5B6P+DxMEc84hHA1LjTTS+KUQhqJoGUFrRBa+/Khu4qIYkVGEaT9blSOzhRLNEYmrVkXORF3HsRe3oIsxvscY3V14ScXL/W5Q1r07sB1pAsktpUdKN5eJaLdLKZUTu929pu+32yYpxiHG5Kh0BeaWLmuwjFYNxgrqKJVI6eVlJzlkYvOhzr45odh2hUu6iaziI3P6aHD/LsxEAnF6DU4tzF2a5RS4/pg5fJRktIIqajNRNvFfMRqDK51QE1S0zBkRS0RkdVuCmlcEAKXXxNc1lGRlaBpDtKcyqond74ka5YAvSEQKQBRf1QtLsxwAAA==",
            baseOld:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAhCAYAAABJLfLcAAAEkklEQVRYCa2XPY8OURSAt1KpdPwAxGewCMsmki1kC7EFBcmGhtAQIr47EkuhIr5CKCSaLURCFAiFwi8gEo0EP4DSyHPtMzlzd+7M+4o3OTlnzjn33uecuXPnnZGR8Ds5vqWKEkIN8/qBxRUOdSPYc3H81ZcqSlf61olD1b4jV5JgF3OB/j07Wv3+dvCvzI6mQuKA8WXrK4CrTw8rbDTX2OYt2HOmtnMfsfyX53sN7LW7z6o3Hz4noYhiAQn+28G68xSBTwAAF+2aSbAUCTgaePzEV9x6n4TOOg4bP1DY/rDxCXVn59oqivB2PtfOn3Rf5+20wLs3LmwUQvzFsd3Vq8m1SSzEa2AEwBa8BD+zY02db453AV3fBcAfLd1QfR2baAg+YoDYebqMXJ1ekrTXxN9ePpKEIqLYRRcXxmIAjV3Hxqfk45mHsSPARei072dHGz5ygFv1/Wc1cuNHEraNNv4IbxFoinBxYYUXDs0aUWIBjvcZcJ4GvOBqixIeWDtNjjb+ErwFuKD67Njq1NlzY6sb0LEAiqKICO94dIKPWyYHd+sAF+F9UCmgD94CuAux24BF2DY73oEI3gpvt9XCX96/M3WXItqEeNwuJVt4oIaFZywNiKfZFBXH7ufgPLDAAFiSEix+FjTOWoIPCk8e4Ie3bE7zRHiOyimEAqLoJ9nFh9WAK4x1a8QCANOvxhdz9DMH89HQxlkvbNApbue7wCNgnkcM36bx6Wpq+nwSHsII12UL7jx55/Mi6msSHZRDeS24Wn/UgF+YeVg9efqu8boXDHjWimKMQvX796EG7DIY9PLSoc5tI7Q6Qmt73HFKYHtyYAMJVP7DJ7gxfV3MdcyKhSjpLnDGGLeI/G2bw7OuoLyc5NBXA/YZDCxBD+sX3s57JwAELEISY7uhiSHYNKLtgW2t43/CszAAUSzIAoQkB3jvmhqeVtDcyZuUZPSwXS7lC5HrWJA2Ofk8vfC8RQFu+/DIJ/tf13kxbeCs1QkP+P3lGxv/1/nPQzH4iefApYXyPK6FjLF8vHtcHXOBLxYAXPxSavvw8Az+V53DRjiABYxHpDkc3a0PLDB2ni4jfHho2/nvz29WbfJu/fbGt4D/k/CbDzjrCBM10PyWrpxoCD5i5Ba7LvyvU+dqCO6CEPgpLnaHyb4+PvFXwtfYvELmciiiD56/2QgfOshQ8MDabfa7Nn7g7VCada4rqYA5eItvFPAP8BYR4el+57aJ8D6oFNAGbyHpDoTOWwBjkI+3jyahyFLn2S75XWVefMR6t82Di4dTd+lwmwhr19UR3o43Chig8wBO7j3dKABwfAPBsyfvndjVKrErQqsjPJ22ADvvc9G153N4wQeG5zTwZGjTTGgRERzfPOC5LYPfubpOG2KxAKAFJ1bc7/41YD+S2CcW4J4kn+fi9bpt8wS/85X2O2CIebnu3O8RngUGEe9CzM0L4DrGsQUdRtMkGYuayW/v254WjEmDfA52wcR5u/JKsdbjMQL22VSPuIC3Vj+v7tghbH3m6Cv5S+P72AaOR5DYkWg7We6LYyMo+XluyYf/D+POWBn5XdrzAAAAAElFTkSuQmCC",
            chefFree:
              "data:image/gif;base64,R0lGODdhDgAQAMMAAAAAABcUJBgUJT4nMXU9Ol07SuNpALttU8h/W/pxev6uNOitfcDL3P///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAAADgAQAAAEVRBIIKoVc4oxiveYxnFfMQTiqJ7psrLSNix0vaAxZ9c45dEBmuA2CdaGi2HPSEs0iUXEDioJWA0MA9ZapA0UDQU4iBseBo3w+NATWNNwbgZAsNoJkwgAIfkEBQcAAAAsAAAAAA4AEAAABFcQSCCqFXOKMYr3mMZxXzEE4qie6bKy0jYsdL2gMWfXOOXRAZrgNgnWhothz0hLNIlFxA6aCRgYhmtPErBes4xukTZQNBTmIG54GDTe78ChJwgQuvi7JAIAIfkECQcAAAAsAAAAAA4AEAAABFcQSCCqFXOKMYr3mMZxXzEE4qie6bKy0jYsdL2gMWfXOOXRAZrgNgnWhothz0hLNIlFxA6aCRgYhmtPErBes4xukTZQNBTmIG54GDTe78ChJwgQuvi7JAIAIfkEBQcAAAAsAAAAAA4AEAAABFYQyEnrFDgLK8YoILhdnhcWQ0CWbLourSt1w2Lfizp7+K0DApAtYBPkJsSbcWH8JW0J6BGJ6E0BgYBhy+BmVcmBQdFQkJMB4yHVaLeJB5VARfhmCXNABAAh+QQJBwAAACwAAAAADgAQAAAEVhDISesUOAsrxigguF2eFxZDQJZsui6tK3XDYt+LOnv4rQMCkC1gE+QmxJtxYfwlbQnoEYnoTQGBgGHL4GZVyYFB0VCQkwHjIdVot4kHlUBF+GYJc0AEACH5BAUHAAAALAAAAAAOABAAAARVEMhJ6xQ4CyvGKCC4XZ4XFkNAlmy6Lq0rdcNi34s6e/itAwKQLWAT5CbEm3Fh/CVtCegRiehNJYGAwcDYMrJI20DRUJCJOuNh0Gi3A4efIEDI2uuSCAAh+QQFBwAAACwAAAAADgAQAAAEGRDISau9OOvNu/9gKEpKo5RZAzTqFjCMGAEAIfkEBQcAAAAsAAAAAA4AEAAABBAQyEmrvTjrzbv/YCiOpBcBADs=",
            chefCooking:
              "data:image/gif;base64,R0lGODdhEAARAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAEAARAIMAAAAXFCQYFCU+JzF1PTpdO0qlHzOmHzSiJjPpMkXkO0TIf1v6cXrorX3Ay9z///8EZBAAQauQGIsxivdXNnHcVwyBuJEsqnJN62ZrY99NSsO4rWsen02QEwVwxAbxJzneGDYos7noKSkiQMAgOBgegcdDKTIYFBWx+pEJJBCK4VqMCQsQVYHYsccQAgEVDoOEWSKDIhEAIfkECQoAAAAsAAAAABAAEQCDAAAAFxQkGBQlPicxdT06XTtKpR8zoiYz6TJF5DtEyH9b+nF66K19wMvc////AAAABGcQAEGrkBiLMYr3VzZx3FcMgbiRLKpyTOtmK2PfTErDuK1rHp9NkBMFcEQG8Sc53hY2aCCECSh6jATD4TAaKo7AgcvNGAwJrSDQIJebiMPhKmi0uY2qo6J02O1vBAGDFAR/eXYiiiIRACH5BAkKAAAALAAAAAAQABEAgwAAABcUJBgUJT4nMXU9Ol07SqUfM6ImM+kyReQ7RMh/W/pxeuitfcDL3P///wAAAARgEMhJ6xQ4CyvFGEUYbpX3geIQlGf7rZTJuCo7MHjOwNen57xOCBfACXaVYu7IOAZIEiVuMd01KQFFM8M4aAUOx8RgSCSMmXA4ijh4m+tGuBF1aAINOiA/IQT+fwQcg4MRACH5BAkKAAAALAAAAAAQABEAgwAAABcUJBgUJT4nMXU9Ol07SqUfM6ImM+kyReQ7RMh/W/pxeuitfcDL3P///wAAAARhEMhJ6xQ4CyvFGEUYbpX3geIQlGf7rZTJuCo7MHjOwNen57xOCBfACXaVYu7IOAYBStxC6nCQJgHFUlCtXiUGA8bYdSQRiYSWW20AqpKA43DANO5uwF1CCGACAQR7HIQVEQAh+QQJCgAAACwAAAAAEAARAIMAAAAXFCQYFCU+JzF1PTolLENdO0qlHzOiJjPpMkXkO0TIf1v6cXrorX3Ay9z///8EWxDISesUOAsrxRhGGG6V94HiEJRn+62U2bgqOzR43sDXp+e8TggXwAl2lWLu2DgGAUocQ7rDUAKLX+PxMFIOh0yBy21eEwqjg+sgTQIPRFYQcDg4hEAmQOD4/REAIfkECQoAAAAsAAAAABAAEQCDAAAAFxQkGBQlPicxdT06XTtKoiYz6TJF5DtEyH9b+nF66K19wMvc////AAAAAAAABF4QyEnrFDgLK8UYRRhulfeB4hCUZ/utlLm4KjsseL7A16fnvE4IF8AJdpVi7rg4BkgSJU4x3TUpgUQT01gYDFooIHBAGBvoozjAADcbDAYm2cjAGRwAIcCO4/MUcXkRACH5BAkKAAAALAAAAAAQABEAgwAAABcUJBgUJT4nMXU9Ol07SqImM+kyReQ7RMh/W/pxeuitfcDL3P///wAAAAAAAARaEMhJ6xQ4CyvFGEUYbpX3geIQlGf7rZS5uCo7LHi+wNen57xOCBfACXaVYu64OAYwEyVOMd0Zo4kmBmcwZEmSwAFhfGaSDG8zmGxkGmwKIcBoNBgEToXB0AMiACH5BAkKAAAALAAAAAAQABEAgwAAABcUJBgUJT4nMXU9Ol07SqUfM6YfNKImM+kyReQ7RMh/W/pxeuitfcDL3P///wRnEABBq5AYizGK91c2cdxXDIG4kSyqck3rZmtj301Kw7itax6fTZATBXDEBvEnOd4YNmiAkgksespkqGkQHAyOgOLxUFYTCsojQCYbHYiho+3GsAVXgWNOdmQIdwIBBHt7IhKGGIkSEQA7",
            food: {
              mashedPotato:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAAP9JREFUKJFtkT9Lw0AYxn8XXHJTOvgpnIoguGQRih1c/QIudjAVdHTs0kHQLB111cEPEHDJUhAkk65BlHY0BO669XUoOZPTgxfuvXv+vM+dwlv5ZCztPr66Ve1+ywfuJufoMAOzhw0icpA/xHwyFlOXv/XxJPH0UExdysn8SExdinNuwFIV7tIvqQoxdSkX8b4EjYsNItKdtJNHhxl8F9ggcmeOMJyN0OsKHWYkb8lGZDUgWdx1RJQf1i62oddHryunrMOMy4P7jUOT/jW9wa4G0Ou7EYezEQCPZ88AXOdzpf57e4Dl19LtX94/u4Q2qQ30wQCdX3w4PRYf2AYD/ADKdpm+AHVCVAAAAABJRU5ErkJggg==",
              pumpkinSoup:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAAXNSR0IArs4c6QAAANpJREFUGJVtkLGqwkAQRc+mERGFRLAxWIpgZNusKNjaCPkL4T1bv0Ox8R8E9RMsBasgNpaijWAsUtkYC9lFY6YaZs6dOzOCVLSqtUTn+8tJfPZEGppKG+XFPGWAP158iYQGp9IGYOiUmUc3lBeT8x0A5OjK/nISVqtaSyYDZcDuXwHlxfwHTRrLEo9tRDir0Ks3E6HtJwOF33GxwpXZ8SkDrHBFf53HtR3E50FaBNAu7uiv8wC49nudH7hcKJpmOqys4vkeZdbMN9LTtb0Wbo4H8fX0LNHmeDDMC0KfRJXEsg5HAAAAAElFTkSuQmCC",
              broth:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAVNJREFUGJVtkb9LQlEYhp9zveX1B+YRCaMoimqxJZqEahKiiCiXmtwcWkKwpaG5qX+hIRByEhycpCHEJqcQoitJQ9hg3RCzmyanQXQIn/l53++FTwAsh6OsT/covjpUKK7zdv3LgFBcZ6XaEYWSxlOlgL4cjmLMCYovDpWP2VxsSq5aLYLSRSpicJa32CkZamO2JyCK2No/pmaaKhTXuflqA+D2OwFoWN8EpYt3u8122sX80pLQaqapEsnkUD7yuAFIRQyC0tWf5fSQSCapmabShmOFxvn2BLmxHgCX9zapiAHA4+TQQgPIZnKkZ06JPXzS/uhfsiwb866LZf1wa5+QzeT6veHVXbodWwWnFjg43GMU2UyORv2ZsXFD6N2ODYA/IIct//EHJI06dDs2OoDXJ0W1UlaL4bWRgWqljNcnRatpIQaP8/okraalRgUG8lOlwB9tDH3Tjcnb2QAAAABJRU5ErkJggg==",
              boiledEggs:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAK5JREFUKJG9zzEOgkAQheF/kUYOQIEHsOEenAAu4+2MWtlZUFIYsdxoNpAAy9gIyoqx83WTfG8mA3+LuGm1zDk1YAD2awC6ssFPC6Qu8YKVei94c3jctoxwLyoRERf7acG3i767dQ4DNPcL1mj8vr7SJ7vpZw7ujh5e8vxhEUTKGo01mtv5MMIJ3myxRmN0jsKJrUrp2v41Gw2A0TlhnKmPAkB1OcmAhoRxNmt/5gFOCoezYAKGfQAAAABJRU5ErkJggg==",
              kaleStew:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAIBAMAAAA/ygPCAAAAKlBMVEUAAADAy9za2to+iUjXdkPkpnJjx03q1Kq4b1CFqHAmXEKClVlwfkt9gUav75hSAAAAAXRSTlMAQObYZgAAADxJREFUCNdjYGBSUjJjYGAzmeqcrMCgnFzbZdrEoGrl6R6yiUFIpeRIkyKDoJCSkqIgA6MgEAgwAGkgCQAzxgl9sRPy+AAAAABJRU5ErkJggg==",
              mushroomSoup:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAXNSR0IArs4c6QAAANtJREFUGJVtj7FqwlAARc/DZ7HUUchiIIvQxVIQ2izi5qSD4pRRUPADuhZKEbTt6pdYcHbULBYXQZDAA0EUHJpYSy3PQQMOOXCne+ByBWecVkcTQbNeA0B0Xz/4Wh50+X9I6uaaZCIOgL//I+684U5mPDVKQl5KaqAAsJ1bfqtt3MmMtNvDaXW0DCfUQFF8znN1Z/NZe8fmhfttwObci2yuorMPj0RNb4If+rEC0/EICeDNF/QzBdhzSkjs1AFIw7TESnnam0d9hu/tGsO0hNz5AaEcJRqmJXZ+wBHQBVW1QY2vrwAAAABJRU5ErkJggg==",
              reindeerCarrot:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAARJJREFUKJGNkSFvAjEYhh/Ibo7MERTBHDNb0DMXcoqQnJlGzt9fmN0PIEHg7x9MktshmF1AbLkEMTPEuGRbEKOiiKVNS1qyT37t8z5vU/BMkqUyyVLpOwc4cy2jh4FsdtanOADqLmMYBZSFAKA7iuVs2HM2qB0bL9qXmNayEGyWeybVFoD48UUz2qyMX+9vAMzHO21/vf2mfxcAYLaoK6NahNHfpUm1ZbPck4efusXN1Y8VUEuyVDY7a8pCEEYB8/GO1vU5APdPH9r4+1zpkMWqYdf2GfOpsECzgX58dxRLlzGfCgsw7drsMypIVTXH+qrZsCd9xn/BLsCsvFg19F9b8KkAc7ywK+DY6KztCnAZ1RwA0RyWCxS2vrIAAAAASUVORK5CYII=",
            },
          },
        };
      },
      // solve the chest captcha
      chestCaptcha: (A, t, e) => {
        const a = e(data),
          s = e(randomWait);
        A.exports = {
          solve: async function () {
            const A = document.getElementsByClassName("modal-content")[0],
              t = A?.getElementsByClassName("text-sm mb-2")[0],
              e = A?.getElementsByClassName("text-sm mt-2 text-center")[0];
            t?.innerText.includes("chest")
              ? await (async function (A) {
                  [...A.getElementsByTagName("img")]
                    .find((A) => A.style.transform.includes("perspective"))
                    .click(),
                    await s.wait(200, 300);
                })(A)
              : e?.innerText.includes("Goblins") &&
                (await (async function (A) {
                  const t = A.getElementsByClassName(
                    "flex flex-wrap justify-center items-center"
                  )[0];
                  for (const A of t.getElementsByTagName("div")) {
                    const t = A.getElementsByTagName("img")[0]?.src;
                    let e = !1;
                    for (const A in a.crops)
                      if (t === a.crops[A]) {
                        e = !0;
                        break;
                      }
                    e || (A.click(), await s.wait(200, 300));
                  }
                })(A)),
              A.getElementsByTagName("button")[0].click(),
              await s.wait(400, 500);
          },
        };
      },
      syncExport: (A) => {
        A.exports = {
          syncTarget: "0x22F39FF254ac5c46Eb5A010634423E450FC58699",
          syncSelector: "0x9566443e",
        };
      },
      firePitCook: (A, t, e) => {
        const { FirePitState: a } = e(currentState),
          s = e(data),
          i = e(randomWait);
        class g {
          static getFirePit(A) {
            if ("126px" !== A.style.width || "84px" !== A.style.height) return;
            const t = A.getElementsByClassName(
                "relative w-full h-full cursor-pointer hover:img-highlight"
              )[0],
              e = t?.getElementsByTagName("img")[0];
            return "IMG" === e?.tagName && e?.src === s.firePit.base
              ? new g(t)
              : void 0;
          }
          constructor(A) {
            this.content = A;
          }
          async update(A) {
            if (this.getStatus() !== a.Free) return;
            this.content.click(),
              await i.wait(400, 500),
              this.content.click(),
              await i.wait(800, 1e3);
            const t = document.getElementsByClassName("modal-content")[0],
              e = t.getElementsByClassName("absolute cursor-pointer z-20")[0];
            (await this.#A(t, A)) || e.click();
            const s = t
              .getElementsByClassName(
                "bg-brown-600 text-white flex flex-col w-full sm:flex-1"
              )[0]
              .getElementsByTagName("button")[0];
            s?.disabled ? e.click() : s.click(), await i.wait(800, 1e3);
          }
          async #A(A, t) {
            const e = A.getElementsByClassName("flex flex-wrap h-fit")[0];
            for (const A of e.children)
              if (A.getElementsByTagName("img")[0]?.src === s.firePit.food[t])
                return (
                  A.getElementsByClassName("cursor-pointer")[0].click(),
                  await i.wait(400, 500),
                  !0
                );
            return await i.wait(400, 500), !1;
          }
          getStatus() {
            const A = this.content.getElementsByTagName("img"),
              t = A[A.length - 1];
            return t?.src === s.firePit.chefFree
              ? a.Free
              : t?.src === s.firePit.chefCooking
              ? a.Pending
              : void 0;
          }
        }
        A.exports = g;
      },
      mainLoop: (A, t, e) => {
        const { SlotState: a, TreeState: s, FirePitState: i } = e(currentState),
          g = e(data),
          n = e(harvest),
          o = e(cutTree),
          E = e(firePitCook),
          l = e(buyseedFunc),
          B = e(randomWait);
        A.exports = class {
          constructor({ crop: A, food: t, syncEnabled: e }) {
            (this.crop = A),
              (this.food = t),
              (this.syncEnabled = e),
              (this.syncPause = !1);
            const a = document.getElementsByClassName(
              "flex flex-col items-center fixed z-50"
            )[0];
            this.selected = a.getElementsByClassName(
              "flex flex-col items-center"
            )[0]?.children[0];
            const s = [...a.getElementsByTagName("img")].find(
              (A) => A.src === g.menu.basket
            );
            if (
              ((this.basket = s?.parentElement),
              (this.settings = [
                ...document.getElementsByClassName(
                  "fixed z-50 cursor-pointer hover:img-highlight"
                ),
              ].find((A) =>
                [...(A?.getElementsByTagName("img") || [])].find(
                  (A) => A.src === g.menu.settings
                )
              )),
              !this.selected || !this.basket || !this.settings)
            )
              throw new Error("unable to find selected item or basket");
            (this.plots = []), (this.trees = []);
            const i = document.getElementById("genesisBlock").parentElement;
            for (const A of i.getElementsByTagName("div")) {
              if ("absolute" !== A.className) continue;
              const t = n.getPlot(A);
              t && this.plots.push(t);
              const e = o.getTree(A);
              e && this.trees.push(e);
              const a = E.getFirePit(A);
              a && (this.firePit = a);
              const s = l.getMarket(A);
              s && (this.market = s);
            }
            if (!this.plots.length || !this.trees.length || !this.firePit)
              throw new Error("unable to find game elements");
          }
          async updatePlots() {
            if (!this.plots.every((A) => A.getStatus() === a.Pending))
              if (await this.#t("seeds", this.crop))
                for (const A of this.plots) await A.update();
              else
                (!this.syncEnabled && this.syncPause) ||
                  (await this.#e(),
                  (await this.market.buySeeds(this.crop)) ||
                    (this.syncPause = !0));
          }
          async updateTrees() {
            if (
              !this.trees.every((A) => A.getStatus() !== s.Ready) &&
              (await this.#t("tools", "axe"))
            )
              for (const A of this.trees) await A.update();
          }
          async updateFirePit() {
            this.firePit.getStatus() === i.Free &&
              (await this.firePit.update(this.food));
          }
          async #t(A, t) {
            const e = this.selected.getElementsByClassName(
              "absolute flex justify-center items-center w-full h-full"
            )[0];
            if (e?.children[0]?.src === g.menu[A][t])
              return !!e?.parentElement?.getElementsByClassName(
                "text-white text-xxs"
              ).length;
            this.basket.click(), await B.wait(800, 1e3);
            const a = [
                ...document
                  .getElementsByClassName("modal-content")[0]
                  .getElementsByTagName("img"),
              ],
              s = a.find((e) => e.src === g.menu[A][t]);
            return (
              !!s &&
              (s.parentElement.parentElement.click(),
              await B.wait(400, 500),
              a.find((A) => A.src === g.menu.exit).click(),
              await B.wait(400, 500),
              !0)
            );
          }
          #e() {
            return new Promise(async (A) => {
              this.settings.click(),
                await B.wait(400, 500),
                this.settings.parentElement.children[0].click(),
                await B.wait(400, 500),
                document
                  .getElementsByClassName("modal-content")[0]
                  .getElementsByTagName("button")[0]
                  .click();
              const t = setInterval(() => {
                const e = document
                  .getElementsByClassName("modal-content")[0]
                  .getElementsByTagName("button")[0];
                if ("Continue" === e?.children[0]?.innerText) {
                  clearInterval(t), e.click();
                  const a = setInterval(() => {
                    document.getElementsByClassName("modal-content")[0] ||
                      (clearInterval(a), setTimeout(A, 2e3));
                  }, 1e3);
                }
              }, 1e3);
            });
          }
        };
      },
      buyseedFunc: (A, t, e) => {
        const a = e(data),
          s = e(randomWait);
        class i {
          static getMarket(A) {
            if ("126px" !== A.style.width || "84px" !== A.style.height) return;
            const t = A.getElementsByClassName(
                "relative w-full h-full cursor-pointer hover:img-highlight"
              )[0],
              e = t?.getElementsByTagName("img")[0];
            return "IMG" === e?.tagName && e?.src === a.menu.market
              ? new i(t)
              : void 0;
          }
          constructor(A) {
            this.content = A;
          }
          async buySeeds(A) {
            this.content.click();
            const t = document.getElementsByClassName("modal-content")[0],
              e = t.getElementsByClassName(
                "w-full max-h-48 sm:max-h-96 sm:w-3/5 h-fit overflow-y-auto scrollable overflow-x-hidden p-1 mt-1 sm:mt-0 sm:mr-1 flex flex-wrap"
              )[0];
            for (const t of e.children)
              if (t.getElementsByTagName("img")[0]?.src === a.menu.seeds[A]) {
                t.children[0].click(), await s.wait(400, 500);
                break;
              }
            const i = t.getElementsByClassName(
              "absolute cursor-pointer z-20"
            )[0];
            let g = [...t.getElementsByTagName("button")].find(
              (A) => "Buy 10" === A.children[0]?.innerText
            );
            if (!g || g?.disabled) return i.click(), !1;
            for (; g && !g.disabled; )
              g.click(),
                await s.wait(100, 150),
                (g = [...t.getElementsByTagName("button")].find(
                  (A) => "Buy 10" === A.children[0]?.innerText
                ));
            return i.click(), !0;
          }
        }
        A.exports = i;
      },
      harvest: (A, t, e) => {
        const { SlotState: a } = e(currentState),
          s = e(data),
          i = e(chestCaptcha),
          g = e(randomWait);
        class n {
          static getPlot(A) {
            if ("42px" !== A.style.width || "42px" !== A.style.height) return;
            const t = A.getElementsByClassName("w-full h-full relative")[0],
              e = t?.getElementsByClassName("absolute pointer-events-none")[0],
              a = t?.getElementsByClassName(
                "absolute z-40 cursor-pointer opacity-0"
              )[0];
            return e && a ? new n(e, a) : void 0;
          }
          constructor(A, t) {
            (this.slot = A), (this.target = t);
          }
          async update() {
            const A = this.getStatus();
            A === a.Empty
              ? await this.#a()
              : A === a.Ready && (await this.#s(), await this.#a());
          }
          async #a() {
            this.target.click(), await g.wait(100, 150);
          }
          async #s() {
            this.target.click(),
              await g.wait(200, 300),
              this.getStatus() !== a.Empty &&
                (await g.wait(400, 500),
                this.getStatus() !== a.Empty &&
                  (this.target.click(),
                  await g.wait(800, 1e3),
                  await i.solve()));
          }
          getStatus() {
            if (1 !== this.slot.children.length) return;
            const A = this.slot.children[0];
            return "DIV" === A.tagName
              ? a.Pending
              : "IMG" === A.tagName
              ? A.src === s.slot.empty
                ? a.Empty
                : a.Ready
              : void 0;
          }
        }
        A.exports = n;
      },
      cutTree: (A, t, e) => {
        const { TreeState: a } = e(currentState),
          s = e(data),
          i = e(randomWait);
        class g {
          static getTree(A) {
            if ("84px" !== A.style.width || "84px" !== A.style.height) return;
            const t = A.getElementsByClassName("relative w-full h-full")[0],
              e = t?.getElementsByClassName(
                "group cursor-pointer w-full h-full"
              )[0],
              a = t?.getElementsByTagName("img")[0];
            return e || a?.src === s.tree.stump ? new g(t) : void 0;
          }
          constructor(A) {
            this.content = A;
          }
          async update() {
            if (this.getStatus() !== a.Ready) return;
            const A = this.content.getElementsByClassName(
              "group cursor-pointer w-full h-full"
            )[0];
            for (let t = 0; t < 3; t++) A.click(), await i.wait(400, 500);
          }
          getStatus() {
            return this.content.getElementsByClassName(
              "group cursor-pointer w-full h-full"
            )[0]
              ? a.Ready
              : this.content.getElementsByTagName("img")[0]?.src ===
                s.tree.stump
              ? a.Pending
              : void 0;
          }
        }
        A.exports = g;
      },
      currentState: (A) => {
        A.exports = {
          SlotState: { Empty: 0, Pending: 1, Ready: 2 },
          TreeState: { Pending: 0, Ready: 1 },
          FirePitState: { Pending: 0, Free: 1 },
        };
      },
      randomWait: (A) => {
        A.exports = {
          wait: async function (A, t) {
            return new Promise((e) =>
              setTimeout(e, Math.random() * (t - A) + A)
            );
          },
        };
      },
    },
    t = {};
  function e(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var i = (t[a] = { exports: {} });
    return A[a](i, i.exports, e), i.exports;
  }
  (() => {
    const A = e(syncExport),
      t = new (e(mainLoop))({ crop: "carrot", food: "broth" }),
      a = window.ethereum.request;
    window.ethereum.request = function (t) {
      return "eth_sendTransaction" === t.method &&
        t.params[0]?.to?.toLowerCase() === A.syncTarget.toLowerCase() &&
        t.params[0]?.data?.startsWith(A.syncSelector) &&
        t.params[0]?.value?.startsWith("0x")
        ? fetch(
            `http://localhost:3001/sync?data=${t.params[0].data}&value=${t.params[0].value}`
          ).then((A) => A.text())
        : a.apply(null, arguments);
    };
    let s = !1;
    setInterval(async () => {
      if (!s) {
        s = !0;
        try {
          await t.updatePlots(), await t.updateFirePit();
        } catch (A) {
          console.error(A);
        }
        s = !1;
      }
    }, 800);
  })();
})();