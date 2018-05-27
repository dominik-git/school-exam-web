import React from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { StyledList, StyledItem, StyledImage } from "./styles";

const SortableItem = SortableElement(({ value }) => <StyledImage src={value} />);

const SortableList = SortableContainer(({ items }) => (
  <StyledList>
    {items.map((value, index) => <SortableItem key={`item-${index}`} index={index} value={value} />)}
  </StyledList>
));

export default class DragAndDropList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["Item 2", "Item 1", "Item 3", "Item 4", "Item 5", "Item 6"],
    };
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    let array = this.props.photos;
    array = arrayMove(array, oldIndex, newIndex);
    this.props.handleSetSlides(array);
  };
  render() {
    return <SortableList items={this.props.photos} onSortEnd={this.onSortEnd} lockAxis="x" axis="x" />;
  }
}
