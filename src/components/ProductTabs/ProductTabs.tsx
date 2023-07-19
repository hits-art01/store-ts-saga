import React, { FC, useEffect, useState } from "react";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { useDispatch } from "react-redux";
import { getCommentsWatch } from "../../redux/actions";
import "./product-tabs.scss";

const ProductTabs: FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const product: any = useTypesSelector(
    (state) => state.current.currentProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsWatch(randomNum(1, 20)));
  }, []);
  function randomNum(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const comments = useTypesSelector((state) => state.reviews.comments);
  console.log(comments.length);
  return (
    <div className="product-page__tabs tabs">
      <div className="tabs__container _container">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          id="controlled-tabs"
        >
          <TabList>
            <Tab>
              {tabIndex === 0 ? (
                <span className="tab-title-on">Description</span>
              ) : (
                <span className="tab-title-off">Description</span>
              )}
            </Tab>
            <Tab>
              {tabIndex === 1 ? (
                <span className="tab-title-on">Additional Information</span>
              ) : (
                <span className="tab-title-off">Additional Information</span>
              )}
            </Tab>
            <Tab>
              {tabIndex === 2 ? (
                <span className="tab-title-on">Reviews</span>
              ) : (
                <span className="tab-title-off">Reviews</span>
              )}
            </Tab>
          </TabList>

          <TabPanel>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            assumenda pariatur voluptate beatae quas quod laudantium magni, sit
            cupiditate quae adipisci, eum sint? Culpa consequatur ducimus
            voluptatem hic labore corrupti? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            <br /> Qui est fugiat harum quasi, quas quisquam amet repellat nisi
            dolores molestiae, hic asperiores maxime ducimus adipisci cupiditate
            laboriosam blanditiis debitis quam illum! Quibusdam dolore minima
            <br /> quaerat iste accusamus nesciunt corporis libero ex ad rerum
            voluptates aliquid, id, illo consequuntur doloribus cupiditate.
            <div className="product-tab__content">
              <div className="product-tab__img">
                {product.images ? <img src={product.images[0]} alt="" /> : null}
              </div>
              <div className="product-tab__img">
                {product.images ? <img src={product.images[1]} alt="" /> : null}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            assumenda pariatur voluptate beatae quas quod laudantium magni, sit
            cupiditate quae adipisci, eum sint? Culpa consequatur ducimus
            voluptatem hic labore corrupti? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            <br /> Qui est fugiat harum quasi, quas quisquam amet repellat nisi
            dolores molestiae, hic asperiores maxime ducimus adipisci cupiditate
            laboriosam blanditiis debitis quam illum! Quibusdam dolore minima
            quaerat iste accusamus nesciunt corporis libero ex ad rerum
            voluptates aliquid, id, illo consequuntur doloribus cupiditate.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
            molestiae laudantium rem magnam maiores quasi enim odit sed
            obcaecati ducimus alias eius aut impedit, reiciendis dolorum earum
            consequuntur, iste mollitia quas nemo? A dignissimos quis voluptates
            hic. Praesentium consequuntur nemo, reprehenderit laboriosam
            voluptate, aliquam mollitia itaque quisquam quam magnam ea ducimus.
            Vitae dolorum in doloremque, eos ab sint maxime voluptate quisquam
            excepturi voluptas nisi, impedit minima aliquid pariatur nobis
            explicabo cupiditate, veniam unde ut accusamus magnam. Atque odio
            sint voluptatem repellendus iure eos architecto ipsum necessitatibus
            aut, quae, doloremque impedit quisquam esse earum minima maxime,
            fugit repellat? Ea, esse nihil!
          </TabPanel>
          <TabPanel>
            {comments.map((comment: any, index: number) => (
              <div key={comment.id} style={{ marginBottom: "10px" }}>
                {++index}. {comment.body}
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
