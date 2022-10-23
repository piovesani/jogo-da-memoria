import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './svgs/logo.svg';
import { Button } from './components/Button';
import { InfoItem } from './components/infoItem';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreatGrid(), []);

  //verify is opened are equal
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown == true);
      if (opened.length === 2) {

        if (opened[0].item === opened[1].item) {

          let tmpGrid = [...gridItems];

          //if both are equal, make every "shown" permanent
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        }
        else {

          //if they are not equal, close all "shown"
          setTimeout(() => {
            let tmpGrid = [...gridItems];

            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        setMoveCount(moveCount => moveCount + 1);

      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  //verify if game is over
  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
      setPlaying(false);
    }
  },[moveCount, gridItems]);

  const resetAndCreatGrid = () => {
    //reset the game
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //creating the grid
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++)tmpGrid.push({
      item: null, shown: false, permanentShown: false
    });

    //filling the grid
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < items.length; j++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = j;
      }
    }


    setGridItems(tmpGrid);
    //start
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  }


  return (
    <C.Body>
      <C.Container>
        <C.Info>
          <C.LogoLink href="">
            <img src={logoImage} width="300" alt="" />
          </C.LogoLink>

          <C.InfoArea>
            <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label="Movimentos" value={moveCount.toString()} />
          </C.InfoArea>

          <Button label="Reiniciar"  onClick={resetAndCreatGrid} />
        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}

          </C.Grid>
        </C.GridArea>
      </C.Container>
    </C.Body>
  );
}

export default App;