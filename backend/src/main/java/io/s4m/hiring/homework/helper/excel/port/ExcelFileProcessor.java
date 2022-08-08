package io.s4m.hiring.homework.helper.excel.port;

import java.util.stream.Stream;

public interface ExcelFileProcessor<T> {
    Stream<T> getSheetContent(int sheet);
}