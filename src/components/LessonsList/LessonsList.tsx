import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { Lesson } from "../../types/Lesson";

type Props = {
  lessons: Lesson[];
};

const LessonsList: React.FC<Props> = ({ lessons }) => {
  const [expanded, setExpanded] = useState<string | false>(
    lessons[0].title
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {[...lessons]
      .sort((a, b) => a.order - b.order) // sort lessons in correct order 
      .map((lesson) => (
        <Accordion
          disabled={lesson.status === "locked"}
          key={lesson.id}
          expanded={expanded === lesson.title}
          onChange={handleChange(lesson.title)}
        >
          <AccordionSummary
            expandIcon={
              lesson.status === "locked"
                ? <LockIcon />
                : <ExpandMoreIcon />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {`${lesson.order}. ${lesson.title}`}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {lesson.type}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <VideoPlayer link={lesson.link} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default LessonsList;
